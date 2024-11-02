import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    taskList: [],
    filterStatus: "all", // all, done, or not
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.taskList.find((task) => task.id === id);
      if (task) {
        task.description = description;
      }
    },
    toggleTaskStatus: (state, action) => {
      const task = state.taskList.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTask, editTask, toggleTaskStatus, setFilterStatus } =
  taskSlice.actions;
export default taskSlice.reducer;
