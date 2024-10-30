import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/commons/Nav/Nav";
import { observer } from "mobx-react-lite";
import Footer from "./components/commons/Footer/Footer";
import { useStore } from "./stores/store";
import Modal from "./components/commons/modal/Modal";
import Loading from "./components/commons/Loading";
import BackToTop from "./components/commons/BackToTop";
import { Toaster } from "react-hot-toast";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const {
    courseStore: { getCourses },
    userStore: { getUser, token, loadingUser },
  } = useStore();

  const themeCallBack = useCallback(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Load from localStorage to persist the theme setting
  useEffect(() => {
    loadTheme();
    getCourses();
    if (token) {
      getUser();
    }
  }, [getCourses, getUser, token]);

  useEffect(() => {
    themeCallBack();
  }, [darkMode, themeCallBack]);

  if (loadingUser) return <Loading />;

  return (
    <div className="example app">
      <Nav setDarkMode={setDarkMode} darkMode={darkMode} />
      <Toaster position="bottom-right" reverseOrder={false} containerStyle={{bottom:"5rem"}} />
      <Modal />
      <Outlet />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default observer(App);
