import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  return (
    <ul className="w-1/2 mx-auto space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-2 border border-gray-300 rounded-md shadow-md">
          <span>{todo.text}</span>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
