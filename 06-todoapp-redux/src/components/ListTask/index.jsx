import React from "react";
import Task from "../Task";

const ListTask = () => {
  return (
    <div className=" grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Task />
    </div>
  );
};

export default ListTask;
