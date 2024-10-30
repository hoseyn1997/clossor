import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavRouter from "./NavRouter";
import SideRouter from "./SideRouter";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import DropDown from "./DropDown";
import Search from "./Search";

interface Props {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
}
export default observer(function Nav({ setDarkMode, darkMode }: Props) {
  const sidebar = useRef<HTMLDivElement | null>(null);
  const [activePage, setActivePage] = useState("");
  // const [showLogOut, setShowLogOut] = useState(false);
  const {
    userStore: { user, isLogedIn, logOut },
  } = useStore();

  const toggleSidebar = () => {
    const sidebar_elem = sidebar.current;
    sidebar_elem?.classList.contains("-left-very")
      ? sidebar_elem?.classList.replace("-left-very", "left-0")
      : sidebar_elem?.classList.replace("left-0", "-left-very");
  };

  return (
    <div>
      <header
        className="fixed top-0 z-10 w-full bg-white p-3 text-2xl shadow-secondary 
      dark:bg-lighter-dark md:p-4 lg:text-xl"
      >
        <div className="mx-auto flex w-full items-center justify-between lg:w-3/4">
          <i
            onClick={() => {
              toggleSidebar();
            }}
            className="bi bi-list block rounded px-2 py-0 shadow-primary dark:text-white dark:shadow-white md:hidden"
          />
          {isLogedIn ? (
            <DropDown />
          ) : (
            <div className="group relative transition-all">
              <Link
                id="authontication"
                to={""}
                className="cursor-pointer text-2xl font-bold text-primary-color"
              >
                Classor
              </Link>
              <Link
                to={"auth"}
                className="absolute left-0 top-0 w-0 cursor-pointer overflow-hidden rounded bg-black text-lg font-bold text-white transition-all group-hover:w-[120px] group-hover:p-1 dark:bg-white dark:text-black"
              >
                login/signUp
              </Link>
            </div>
          )}
          <ul className="hidden items-center justify-between gap-5 font-thin text-[#666] dark:text-white md:flex">
            <NavRouter
              setActivePage={setActivePage}
              activePage={activePage}
              to=""
              title="Home"
            />
            <NavRouter
              setActivePage={setActivePage}
              activePage={activePage}
              to="courses"
              title="Courses"
            />
            <NavRouter
              setActivePage={setActivePage}
              activePage={activePage}
              to="about"
              title="About"
            />
            <NavRouter
              setActivePage={setActivePage}
              activePage={activePage}
              to="/latest"
              title="Latest"
              class_Name="after:rounded after:bg-[#54a74e] after:px-1 after:text-xs after:text-white after:content-['New']"
            />
            <Search />
          </ul>
          <div className="flex gap-5">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bi bi-brightness-high-fill dark:text-white"
              id="toggle"
            />
            <Link to={"/contact"} className="bi bi-chat-text dark:text-white" />
          </div>
        </div>
      </header>
      <div id="side-bar" ref={sidebar} className="sidebar -left-very">
        <ul className="grid gap-5 p-3 text-xl">
          <li className="flex rounded text-2xl">
            <i
              onClick={toggleSidebar}
              className="bi bi-x-lg rounded px-2 py-0 shadow-primary dark:text-white dark:shadow-white"
            />
          </li>
          <SideRouter
            to=""
            title="Home"
            toggleSidebar={toggleSidebar}
            activePage={activePage}
            setActivePage={setActivePage}
            icon="bi bi-house"
          />
          <SideRouter
            to="courses"
            title="Courses"
            toggleSidebar={toggleSidebar}
            activePage={activePage}
            setActivePage={setActivePage}
            icon="bi bi-google-play"
          />
          <SideRouter
            to="about"
            title="About"
            toggleSidebar={toggleSidebar}
            activePage={activePage}
            setActivePage={setActivePage}
            icon="bi bi-info-square-fill"
          />
          <SideRouter
            to="contact"
            title="Contact"
            toggleSidebar={toggleSidebar}
            activePage={activePage}
            setActivePage={setActivePage}
            icon="bi bi-clipboard-check-fill"
          />
          {isLogedIn ? (
            <DropDown />
          ) : (
            <SideRouter
              to="auth"
              title="Login-SignUp"
              toggleSidebar={toggleSidebar}
              activePage={activePage}
              setActivePage={setActivePage}
              icon="bi bi-person-fill-add"
            />
          )}
        </ul>
      </div>
    </div>
  );
});
