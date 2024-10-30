import { useEffect } from "react";
import { useStore } from "../stores/store";
import Loading from "../components/commons/Loading";
import { observer } from "mobx-react-lite";
import AppContent from "../components/commons/BodyContext/AppContent";
import { Link } from "react-router-dom";

export default observer(function Courses() {
  const {
    courseStore: { courses, loadingCourses, getCourses },
  } = useStore();
  useEffect(() => {
    courses.length === 0 && getCourses();
  }, [getCourses]);

  if (loadingCourses) return <Loading />;

  return (
    <AppContent>
      <div className="my-2 col-span-12 grid gap-3 p-3 shadow-primary dark:shadow-lighter-dark lg:col-span-9 lg:p-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="grid gap-5 lg:grid-cols-2"
            id="course"
          >
            <img
              src={`/assets/courses/${course.category}.webp`}
              alt={course.title}
              className="w-full object-cover"
            />
            <div>
              <div className="mb-2 grid grid-cols-3">
                <div className="col-span-2 flex items-center gap-2 text-xs text-darker-light">
                  <p className="flex gap-2">
                    <i className="bi bi-person-circle"></i>
                    Classor
                  </p>
                  <p className="flex gap-2">
                    <i className="bi bi-alarm"></i>2 Hours Ago
                  </p>
                </div>
                <p className="justify-self-end text-xs">
                  <i className="bi bi-fire text-primary-color"></i>
                  234
                </p>
              </div>
              <a
                href="#"
                target="_blank"
                className="cursor-pointer text-xl font-bold text-primary-color transition-all hover:text-primary-strong"
              >
                {course.title}
              </a>
              <p className="text-lg Just4Rows">{course.description}</p>
              <Link
                to={`/courses/${course.id}`}
                className="my-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-primary-color px-3 py-1 transition-all hover:bg-primary-strong lg:w-fit"
              >
                Read More <i className="bi bi-play-fill"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </AppContent>
  );
});
