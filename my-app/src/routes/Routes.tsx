import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import About from "../pages/About";
import CourseDetails from "../pages/CourseDetails";
import LoginUp from "../pages/LoginUp";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import NoMatch from "../pages/NoMatch";
import Latest from "../pages/Latest";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/latest",
        element: <Latest />,
      },
      {
        path: "/auth",
        element: <LoginUp />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "profile/:username",
        element: <Profile />,
      },
      //NoMatch
      { path: "/not-found", element: <NoMatch /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];
export const router = createBrowserRouter(routes);
