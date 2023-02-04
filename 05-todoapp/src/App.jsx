import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import Task from "./components/Task";
import { tasks } from "./tasks";

function App() {
  const [tasksList, setTaskList] = useState(tasks);
  const addingTask = (e) => {
    e.preventDefault();
    const myNewTask = {
      id: e.target.id.value,
      description: e.target.description.value,
    };
    setTaskList([...tasksList, myNewTask]);
  };
  const deleteTask = (id) => {
    const afterDeletion = tasksList.filter((task) => task.id !== id);
    setTaskList(afterDeletion);
  };
  return (
    <div className="App p-5 lg:p-10">
      <AddTask addingTask={addingTask} />
      <ListTask tasks={tasksList} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
