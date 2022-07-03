import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./todoSlice";
import { selectTodo } from "./todoSlice";

export function Todo() {
  const todos = useSelector(selectTodo);
  console.log(todos, "todos");
  const dispatch = useDispatch();
  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };
  const handleRemoveTodo = (event, id) => {
    event.preventDefault();
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input type="text" name="title" placeholder="new todo" />
        <input type="submit" value="ADD TODO" />
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo.id + index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              {todo.title}
              <button
                onClick={(event) => {
                  handleRemoveTodo(event, todo.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
