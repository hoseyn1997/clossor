import { useEffect, useState } from "react";
import AppContent from "../components/commons/BodyContext/AppContent";
import { useStore } from "../stores/store";
import { useParams } from "react-router-dom";
import Loading from "../components/commons/Loading";
import { observer } from "mobx-react-lite";
import toast from "react-hot-toast";

export default observer(function CourseDetails() {
  const { id } = useParams();
  const [showMore, setShoMore] = useState(true);
  const {
    courseStore: {
      getCourse,
      selectedCourse,
      clearSelectedCourse,
      loadingCourse,
      addUserCourse,
      addingUserCourse,
    },
    userStore: { isLogedIn },
  } = useStore();

  useEffect(() => {
    if ((selectedCourse === undefined || selectedCourse?.id !== id) && id)
      getCourse(id);
    return () => clearSelectedCourse();
  }, [getCourse, clearSelectedCourse, id]);

  if (loadingCourse) return <Loading />;

  return (
    <AppContent>
      {selectedCourse && (
        <>
          <div className=" relative z-6 my-2">
            <div className="grid md:col-span-2 xl:grid-cols-3 z-6">
              <figure
                id="movie-detail-banner"
                className="relative h-96 w-full overflow-hidden rounded-md lg:col-span-1 xl:w-72"
              >
                <img
                  src={`/assets/courses/${selectedCourse.category}.webp`}
                  alt="art"
                  className="h-full w-full object-cover"
                />
                <button className="z-10 text-white">
                  <i className="bi bi-play-circle absolute left-0 right-0 top-32 text-7xl transition-all hover:scale-90"></i>
                </button>
                <button
                  onClick={() => {
                    if (!isLogedIn) {
                      toast(
                        "You Can Not Add A Lesson While You Are Not Logged In Or Registered\n************\n First You Need To Login",
                        {
                          duration: 6000,
                        }
                      );
                    }
                    isLogedIn &&
                      !selectedCourse.isAdded &&
                      addUserCourse(selectedCourse.id);
                  }}
                  className="absolute bottom-1 left-1 right-2 z-6 w-[93%] justify-self-end rounded 
                bg-primary-strong px-2 py-1 text-2xl md:mt-10 ring-2 ring-white dark:ring-darker-light"
                >
                  {selectedCourse.isAdded ? (
                    <> You Have This Course Added</>
                  ) : addingUserCourse ? (
                    "Adding Course..."
                  ) : (
                    <>
                      Add Course <i className="bi bi-file-plus-fill"></i>
                    </>
                  )}
                </button>
              </figure>
              <div className="my-5 grid h-fit gap-1 text-white md:gap-3 lg:col-span-1 xl:col-span-2">
                <h1 className="text-xl font-bold text-primary-strong lg:text-2xl">
                  Learn {selectedCourse.title} Here
                </h1>
                <h2 className="text-3xl font-bold text-primary-light lg:text-5xl">
                  {selectedCourse.title} Course Here
                </h2>
                <div className="my-2 gap-2">
                  <button className="mx-1 my-1 rounded bg-body_dark px-2 shadow-primary shadow-white">
                    24min
                  </button>
                  <button className="mx-1 my-1 rounded bg-body_dark px-2 shadow-primary shadow-white">
                    Teacher_name
                  </button>
                  <button className="mx-1 my-1 rounded bg-body_dark px-2 shadow-primary shadow-white">
                    2024.01.20
                  </button>
                  <button className="mx-1 my-1 rounded bg-body_dark px-2 shadow-primary shadow-white">
                    244 views
                  </button>
                </div>
                <div>
                  <p className={`text-lg ${showMore ? "Just4Rows" : ""}`}>
                    {selectedCourse.description}
                  </p>
                  <span
                    className="text-primary-strong font-bold text-lg cursor-pointer"
                    onClick={() => {
                      setShoMore(!showMore);
                    }}
                  >
                    {showMore ? "More..." : "Less..."}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={`/assets/courses/${selectedCourse.category}.webp`}
              alt="art"
              className="fixed left-0 top-0 z-0 h-screen w-full object-cover"
            />
            <div className="fixed left-0 top-0 z-5 h-screen w-full bg-black opacity-75 transition-opacity duration-500 dark:opacity-80"></div>
          </div>
        </>
      )}
    </AppContent>
  );
});
