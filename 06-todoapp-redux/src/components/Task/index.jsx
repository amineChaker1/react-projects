import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../app/store";
const Task = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const deletingTask = (id) => {
    const afterDeletion = tasks.filter((task) => task.id !== id);
    dispatch(deleteTask(afterDeletion));
  };
  return tasks.length !== 0 ? (
    tasks.map((task) => {
      return (
        <div className="border-indigo-700 border-2 rounded-lg p-2  m-3">
          <h3 className="text-center font-bold uppercase"> {task.id} </h3>
          <p>{task.description}</p>
          <div className="text-right mt-2">
            <button onClick={() => deletingTask(task.id)}>
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-indigo-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      );
    })
  ) : (
    <>
      <div className="font-bold text-3xl mt-3 w-full text-center">
        Please Add a Task !
      </div>
    </>
  );
};

export default Task;
