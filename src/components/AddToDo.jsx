import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddToDo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addToDoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addToDoHandler}
      className="flex flex-col items-center space-y-4">
      <input
        required
        className="w-1/2 p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your task..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Add
      </button>
    </form>
  );
};

export default AddToDo;
