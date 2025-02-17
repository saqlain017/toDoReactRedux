import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/slice/toDoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
