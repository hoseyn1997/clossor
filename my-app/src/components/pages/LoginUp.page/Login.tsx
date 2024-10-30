import { observer } from "mobx-react-lite";
import SuccessfullLogin from "./SuccessfullLogin";
import toast from "react-hot-toast";
import { User } from "../../../api/models/user";
import { useStore } from "../../../stores/store";

interface Props {
  handleUsername(e: React.KeyboardEvent<HTMLInputElement>): void;
  loginMode: boolean;
  setLoginMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default observer(function Login({
  handleUsername,
  loginMode,
  setLoginMode,
}: Props) {
  const {
    userStore: { login, authorizing },
  } = useStore();
  return (
    <form
      id="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        let data = new FormData(e.target as HTMLFormElement);
        login({
          username: data.get("username") as string,
          password: data.get("password") as string,
        }).then((user: User | null | undefined) => {
          user && toast.custom((t) => <SuccessfullLogin user={user} t={t} />);
        });
      }}
      className="mx-auto my-2 grid w-full gap-1 md:w-1/2 lg:w-1/3"
    >
      <label>username*</label>
      <input
        name="username"
        type="text"
        onKeyDown={(e) => handleUsername(e)}
        id="login-username"
        placeholder="username"
        className="w-full rounded py-1 text-center shadow-primary dark:bg-body_dark dark:shadow-white"
      />
      <label>password*</label>
      <input
        name="password"
        type="password"
        placeholder="password"
        className="w-full rounded py-1 text-center shadow-primary dark:bg-body_dark dark:shadow-white"
      />
      <button
        id="login-button"
        type="submit"
        className="my-1 flex items-center justify-center gap-3 rounded bg-orange-600 py-1 text-white"
      >
        <i className="bi bi-box-arrow-in-left text-xl"></i>
        <span> {authorizing ? "Logging U In ..." : "login"} </span>
      </button>
      <div className="py-1">
        if you dont have an account
        <button
          onClick={() => setLoginMode(!loginMode)}
          className="text-primary-color mx-2"
          type="button"
        >
          signUp
        </button>
      </div>
    </form>
  );
});
