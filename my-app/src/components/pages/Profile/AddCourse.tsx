import { categories } from "../../../api/categories";
import { teachers } from "../../../api/teachers";
import { v4 as uguid } from "uuid";
import { useStore } from "../../../stores/store";
import { router } from "../../../routes/Routes";
import { observer } from "mobx-react-lite";

export default observer(function AddCourse() {
  const {
    courseStore: { addCourse, selectedCourse, adding },
  } = useStore();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let data = new FormData(e.target as HTMLFormElement);
          addCourse({
            id: uguid(),
            title: data.get("title") as string,
            description: data.get("description") as string,
            category: data.get("category") as string,
            teacherName: data.get("teacher") as string,
            creationDate: new Date(),
            lastModified: new Date(),
          }).then(() => router.navigate(`/courses/${selectedCourse?.id}`));
        }}
        className="grid w-full lg:w-3/4 mx-auto p-4 gap-3 bg-gray-200 dark:bg-gray-700 rounded"
      >
        <h1 className="text-green-400 font-bold text-3xl text-center">
          Add A New Corse:
        </h1>
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          className="w-full py-1 rounded-md text-black text-sm"
        />
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          rows={4}
          name="description"
          className="w-full py-1 rounded-md text-black text-sm"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              id="courses"
              name="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 
          focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="teachers"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Teacher
            </label>
            <select
              id="teachers"
              name="teacher"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 
          focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {teachers.map((teach, idx) => (
                <option key={idx} value={teach}>
                  {teach}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          disabled={adding}
          className="ring-1 ring-gray-400 dark:ring-white rounded px-2 py-1"
        >
          {adding ? "Adding Course..." : "Add"}
        </button>
      </form>
    </>
  );
});
