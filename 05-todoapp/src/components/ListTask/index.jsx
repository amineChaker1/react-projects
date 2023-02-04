import React from "react";
import Task from "../Task";

const ListTask = ({ tasks, deleteTask }) => {
  return (
    <div className=" grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Task tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default ListTask;
