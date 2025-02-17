import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/slice/toDoSlice.js";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
