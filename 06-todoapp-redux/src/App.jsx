import { useState } from "react";

import "./App.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="App p-5 lg:p-10">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
