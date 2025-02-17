"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  updateTodo,
  deleteTodo,
  toggleComplete,
} from "/features/slice/toDoSlice.js";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateTodo({ id: todo.id, text: editText }));
    setIsEditing(false);
  };

  return (
    <div
      className={`flex items-center justify-between p-4 border-b last:border-b-0 ${
        todo.completed ? "bg-muted" : ""
      }`}
    >
      {isEditing ? (
        <Input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleUpdate}
          onKeyPress={(e) => e.key === "Enter" && handleUpdate()}
          className="flex-grow mr-2"
        />
      ) : (
        <span
          className={`flex-grow cursor-pointer ${
            todo.completed ? "line-through text-muted-foreground" : ""
          }`}
          onClick={() => dispatch(toggleComplete(todo.id))}
        >
          {todo.text}
        </span>
      )}
      <div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Save" : "Edit"}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
