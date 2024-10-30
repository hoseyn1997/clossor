import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores/store";
import { Link } from "react-router-dom";

export default observer(function Search() {
  const {
    courseStore: { searchCourse, searchResult, searching, clearSearchResult },
  } = useStore();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);
        searchCourse(data.get("predicate") as string);
      }}
      className="group relative flex items-center justify-center text-sm transition-all 
      duration-500 hover:scale-110"
    >
      <input
        type="text"
        name="predicate"
        placeholder="Search.."
        className="search-site text-sm"
      />
      <button type="submit">
        <i className="bi bi-search absolute right-2 top-2 cursor-pointer text-black" />
      </button>
      {(searchResult.length > 0 || searching) &&
        (!searching ? (
          <div className="absolute top-10 bg-white rounded grid gap-2 p-2 w-full shadow-md">
            <span
              onClick={() => clearSearchResult()}
              className="text-xxs cursor-pointer hover:text-gray-500 hover:bg-gray-50 transition-all 
            w-fit px-1 rounded-full"
            >
              clearResult
            </span>
            {searchResult.map((course) => (
              <Link
                to={`/courses/${course.id}`}
                onClick={() => {
                  clearSearchResult();
                }}
                className="bg-gray-50 rounded flex gap-2 text-xl"
              >
                <i className="bi bi-binoculars-fill"></i>
                <p className="text-sm">{course.title}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="absolute top-10 bg-white rounded grid gap-2 p-2 w-full shadow-md">
            Searching...
          </div>
        ))}
    </form>
  );
});
