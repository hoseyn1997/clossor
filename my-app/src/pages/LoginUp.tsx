import { observer } from "mobx-react-lite";
import { useState } from "react";
import { invalidUsername_items } from "../api/invalidItems";
import { useStore } from "../stores/store";
import AlreadyLoggedIn from "../components/pages/LoginUp.page/AlreadyLoggedIn";
import Login from "../components/pages/LoginUp.page/Login";
import SignUp from "../components/pages/LoginUp.page/SignUp";

export default observer(function LoginUp() {
  const [loginMode, setLoginMode] = useState(true);
  const {
    userStore: { isLogedIn, user },
  } = useStore();

  function handleUsername(e: React.KeyboardEvent<HTMLInputElement>) {
    if (invalidUsername_items.includes(e.key)) {
      e.preventDefault();
    }
  }

  if (isLogedIn && user) return <AlreadyLoggedIn user={user} />;

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[50vh] gap-5 p-5 ">
      <img src="/favicon.ico" alt="favicon" className="w-32 rounded-full" />
      {loginMode ? (
        <Login
          handleUsername={handleUsername}
          loginMode={loginMode}
          setLoginMode={setLoginMode}
        />
      ) : (
        <SignUp
          loginMode={loginMode}
          handleUsername={handleUsername}
          setLoginMode={setLoginMode}
        />
      )}
    </div>
  );
});
