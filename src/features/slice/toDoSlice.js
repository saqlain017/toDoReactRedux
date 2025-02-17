import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleComplete } =
  todosSlice.actions;
export default todosSlice.reducer;
