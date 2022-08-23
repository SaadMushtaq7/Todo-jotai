import React, { FC, useRef } from "react";
import { useAtom } from "jotai";
import { newTodoAtom, addTodoAtom } from "../store";
import "./styles.css";

const InputField: FC = () => {
  const [todo, setTodo] = useAtom(newTodoAtom);
  const [, addTodo] = useAtom(addTodoAtom);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="input">
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input__box"
      />
      <button
        className="input__submit"
        onClick={() => {
          addTodo();
          inputRef.current?.blur();
        }}
      >
        Go
      </button>
    </div>
  );
};

export default InputField;
