import { atom } from "jotai";
import { Todo } from "./model";

const handleAdd = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  { id: Date.now(), todo: text, isDone: false },
];

const handleDone = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) =>
    todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
  );

const handleDelete = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const handleUpdate = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((singleTodo) => ({
    ...singleTodo,
    todo: singleTodo.id === id ? text : singleTodo.todo,
  }));

export const newTodoAtom = atom<string>("");
export const todosAtom = atom<Todo[]>([]);

export const addTodoAtom = atom(
  () => "",
  (get, set) => {
    set(todosAtom, handleAdd(get(todosAtom), get(newTodoAtom)));
    set(newTodoAtom, "");
  }
);

export const doneTodoAtom = atom(
  () => "",
  (get, set, id: number) => {
    set(todosAtom, handleDone(get(todosAtom), id));
  }
);

export const deleteTodoAtom = atom(
  () => "",
  (get, set, id: number) => {
    set(todosAtom, handleDelete(get(todosAtom), id));
  }
);

export const updateTodoAtom = atom(
  () => "",
  (get, set, { id, text }: { id: number; text: string }) => {
    set(todosAtom, handleUpdate(get(todosAtom), id, text));
  }
);
