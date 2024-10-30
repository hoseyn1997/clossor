import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores/store";

interface Props {
  handleUsername(e: React.KeyboardEvent<HTMLInputElement>): void;
  loginMode: boolean;
  setLoginMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default observer(function SignUp({
  handleUsername,
  loginMode,
  setLoginMode,
}: Props) {
  const {
    userStore: { register, authorizing },
  } = useStore();

  return (
    <form
      id="signUp-form"
      onSubmit={(e) => {
        e.preventDefault();
        let data = new FormData(e.target as HTMLFormElement);
        register({
          username: data.get("username") as string,
          password: data.get("password") as string,
          email: data.get("email") as string,
        });
      }}
      className="mx-auto my-2 grid w-full gap-1 md:w-1/2 lg:w-1/3"
    >
      <label>email*</label>
      <input
        name="email"
        type="email"
        placeholder="email"
        className="w-full rounded py-1 text-center shadow-primary dark:bg-body_dark dark:shadow-white"
      />
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
        id="signUp-button"
        type="submit"
        className="my-1 flex items-center justify-center gap-3 rounded bg-orange-600 py-1 text-white"
      >
        <i className="bi bi-plus-square text-xl"></i>
        <span> {authorizing ? "Signing U Up ..." : "signUp"} </span>
      </button>
      <div className="py-1">
        if you have and account
        <button
          onClick={() => setLoginMode(!loginMode)}
          className="text-primary-color mx-2"
          type="button"
        >
          login
        </button>
      </div>
    </form>
  );
});
