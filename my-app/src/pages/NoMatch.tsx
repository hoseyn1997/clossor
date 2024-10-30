import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col justify-center items-center gap-6">
      <p className="text-4xl font-bold text-red-400">Could Not Find Anything Here...</p>
      <Link to="/" className="font-bold text-2xl underline text-blue-400">
        Back To Home
      </Link>
    </div>
  );
}
