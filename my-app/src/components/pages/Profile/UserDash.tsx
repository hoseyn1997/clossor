import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppContent from "../../commons/BodyContext/AppContent";
import { useStore } from "../../../stores/store";

export default observer(function UserDash() {
  const [showUserCourses, setShowUserCourses] = useState(false);

  const {
    courseStore: {
      getUserCourses,
      gettingUserCourses,
      userCourses,
      removeUserCourses,
      removing,
    },
    userStore: { user },
  } = useStore();

  return (
    <AppContent>
      <div className="flex flex-col justify-center items-center  text-2xl h-[70vh] gap-2 p-2  overflow-hidden overflow-y-scroll example">
        {!showUserCourses ? (
          <>
            <h1 className="text-4xl font-bold text-green-400 text-center">
              Hello. This Is Your Profile
            </h1>
            <p className="text-4xl font-bold">
              Whats Up{" "}
              <span className="text-primary-color">{user?.displayName}</span>?
            </p>
            <Link
              to="/contact"
              className="ring-1 ring-primary-color px-2 py-1 rounded my-2 
          hover:bg-primary-light hover:text-black transition-all"
            >
              Any Questions?
            </Link>
            <button
              onClick={() =>
                getUserCourses().then(() => setShowUserCourses(true))
              }
              className="ring-1 ring-primary-color px-2 py-1 rounded my-2 
          hover:bg-primary-light hover:text-black transition-all"
            >
              {gettingUserCourses ? "Getting info..." : "Get Your Courses"}
            </button>{" "}
          </>
        ) : (
          <>
            <div>
              UserCoursesList:
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {userCourses.map((userCourse) => (
                  <div
                    key={userCourse.courseId}
                    className="flex items-center justify-between gap-5 bg-white shadow-md p-1 ring-1 
                  ring-primary-color"
                  >
                    <img
                      src={`/assets/courses/${userCourse.course.category}.webp`}
                      alt={userCourse.course.title}
                      className="w-20 rounded"
                    />
                    <Link
                      to={`/courses/${userCourse.courseId}`}
                      className="hover:text-blue-400 text-black"
                    >
                      {userCourse.course.title}
                    </Link>
                    <button
                      onClick={() => removeUserCourses(userCourse.courseId)}
                      className="text-red-500"
                    >
                      {removing ? (
                        <i className="bi bi-recycle"></i>
                      ) : (
                        <i className="bi bi-trash"></i>
                      )}
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowUserCourses(false)}
                className="ring-1 ring-primary-color px-2 py-1 rounded my-2 
          hover:bg-primary-light hover:text-black transition-all"
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </AppContent>
  );
});
