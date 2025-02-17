"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { addTodo } from "./features/slice/toDoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <>
      <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow"
        />
        <Button type="submit">
          <Plus className="w-4 h-4 mr-2" />
          Add
        </Button>
      </form>
      <Card>
        <CardContent className="p-0">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default TodoList;
