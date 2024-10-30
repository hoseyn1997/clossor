import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { User } from "../../../api/models/user";

interface Props{
  user:User
}

export default observer(function AlreadyLoggedIn({user}:Props) {

  return (
    <div className="leading-8 flex flex-col justify-center items-center w-full min-h-[50vh] gap-5">
      <p className="text-4xl font-bold text-center text-green-500">
        you are already loggedIn...
      </p>
      <div className="flex gap-3">
        <Link to={"/"} className="ring-1 ring-slate-300 font-thin px-1 rounded">
          Back To Home
        </Link>
        <Link
          to={`/profile/${user?.username}`}
          className="ring-1 ring-slate-300 font-thin px-1 rounded"
        >
          Go To Profile
        </Link>
      </div>
    </div>
  );
});
