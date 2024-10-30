import { observer } from "mobx-react-lite";

export default observer(function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-1 fixed top-0 w-full bg-white z-20">
      <div className="flex justify-center items-center gap-1">
        <div className=" flex justify-center items-center rounded-full h-14 w-14 bg-violet-800 animate-bounce shadow-2xl">
          <img src="/favicon.ico" alt="" className="w-10 h-10 rounded-full" />
        </div>
        <div className=" flex justify-center items-center rounded-full h-20 w-20 bg-violet-800 animate-bounce shadow-2xl">
          <img src="/favicon.ico" alt="" className="w-16 h-16 rounded-full" />
        </div>
        <div className=" flex justify-center items-center rounded-full h-14 w-14 bg-violet-800 animate-bounce shadow-2xl">
          <img src="/favicon.ico" alt="" className="w-10 h-10 rounded-full" />
        </div>
      </div>
      <p className="text-black text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        almost there...
      </p>
    </div>
  );
});
