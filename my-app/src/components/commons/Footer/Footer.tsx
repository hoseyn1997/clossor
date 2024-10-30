import { observer } from "mobx-react-lite";

export default observer(function Footer() {
  return (
    <footer className="absolute bottom-0 flex w-full flex-col items-center gap-1 bg-black p-2 text-white dark:bg-lighter-dark dark:text-white z-6">
      <div className="flex items-center gap-3">
        Learn Everything In Classor |
        <div className="flex gap-2 text-red-600">
          <i className="bi bi-suit-heart-fill"></i>
          <span>
            {" "}
            <img src="/favicon.ico" alt="icon" className="w-6" />{" "}
          </span>
        </div>
      </div>
      <div className="flex gap-3">
        <a href="#" className="bi bi-youtube hover:text-primary-color"></a>
        <a href="#" className="bi bi-instagram hover:text-primary-color"></a>
        <a href="#" className="bi bi-telephone hover:text-primary-color"></a>
        <a href="#" className="bi bi-telegram hover:text-primary-color"></a>
      </div>
    </footer>
  );
});
