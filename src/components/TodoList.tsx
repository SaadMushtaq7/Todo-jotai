import React, { FC } from "react";
import { useAtom } from "jotai";
import { todosAtom } from "../store";
import SingleTodo from "./SingleTodo";
import "./styles.css";

const TodoList: FC = () => {
  const [todos] = useAtom(todosAtom);

  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
