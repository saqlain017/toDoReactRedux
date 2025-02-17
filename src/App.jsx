import { Provider } from "react-redux";
import { store } from "./store/store.js";
import TodoList from "./ToDoList.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
