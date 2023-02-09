import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../app/store";

const AddTask = () => {
  const dispatch = useDispatch();
  const addingTask = (e) => {
    e.preventDefault();
    const myNewTask = {
      id: e.target.id.value,
      description: e.target.description.value,
    };
    dispatch(addTask(myNewTask));
  };
  return (
    <>
      <div className="w-full">
        <form onSubmit={(e) => addingTask(e)}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="id"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="id"
                      id="title"
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="What do you want to do ? "
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Details
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Tell us in detail"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTask;
