import React, { FC } from "react";
import { Provider as JotaiProvider } from "jotai";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

const App: FC = () => {
  return (
    <JotaiProvider>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField />
        <TodoList />
      </div>
    </JotaiProvider>
  );
};

export default App;
