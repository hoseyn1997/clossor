import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useStore } from "../../../stores/store";

export default observer(function TopCourses() {
  const {
    courseStore: { loadingCourses, top6courses },
  } = useStore();

  return loadingCourses ? (
    <p>loadingCourses</p>
  ) : (
    <section
      id="top-courses"
      className="my-5 p-5 shadow-primary dark:shadow-white rounded"
    >
      <div className="grid grid-cols-2 my-2 items-center">
        <h2 className="topic">Top Courses</h2>
        <Link to={"/courses"} className="justify-self-end font-bold">
          See More...
        </Link>
      </div>

      <div
        id="index-top-coures"
        className="grid grid-cols-1 gap-3 p-2 md:grid-cols-2 lg:p-5"
      >
        {top6courses.map((course) => (
          <div
            key={course.id}
            className="grid grid-cols-2 items-center gap-3 font-bold"
          >
            <img
              src={`/assets/courses/${course.category}.webp`}
              alt={course.title}
              className="top_coursesImage"
            />
            <div>
              <p className="text-sm md:text-xl">{course.title}</p>
              <Link
                to={`/courses/${course.id}`}
                className="Just3Rows top_courses_description"
              >
                {course.description}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
