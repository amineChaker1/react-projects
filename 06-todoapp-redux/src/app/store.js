import { configureStore, createSlice } from "@reduxjs/toolkit";
import { tasks } from "../tasks";
const taskSlice = createSlice({
  name: "tasks",
  initialState: tasks,
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    deleteTask: (state, action) => {
      return action.payload;
    },
    updateTask: (state, action) => {},
  },
});
export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
  },
});
