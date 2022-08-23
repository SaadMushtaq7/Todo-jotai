import React, { FC, useState } from "react";
import { useAtom } from "jotai";
import { doneTodoAtom, deleteTodoAtom, updateTodoAtom } from "../store";
import { Todo } from "../model";
import "./styles.css";

interface Props {
  todo: Todo;
}

const SingleTodo: FC<Props> = ({ todo }) => {
  const [editCheck, setEditCheck] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const [, updateTodo] = useAtom(updateTodoAtom);
  const [, doneTodo] = useAtom(doneTodoAtom);
  const [, deleteTodo] = useAtom(deleteTodoAtom);

  return (
    <form className="todos__single">
      {editCheck ? (
        <>
          <input
            className="todo__edit--input"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
          <button
            className="todo__edit--save--btn"
            onClick={(e) => {
              e.preventDefault();
              updateTodo({ id: todo.id, text: editTodo });
              setEditCheck(false);
            }}
          >
            Update
          </button>
        </>
      ) : (
        <>
          {todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )}
          <div>
            <span className="icon">
              <i
                className="fa-solid fa-delete-left"
                onClick={() => deleteTodo(todo.id)}
              />
            </span>
            <span className="icon" onClick={() => doneTodo(todo.id)}>
              <i className="fa-solid fa-check" />
            </span>
            <span className="icon">
              <i
                className="fa-solid fa-pen-to-square"
                onClick={() => setEditCheck(true)}
              />
            </span>
          </div>
        </>
      )}
    </form>
  );
};

export default SingleTodo;
