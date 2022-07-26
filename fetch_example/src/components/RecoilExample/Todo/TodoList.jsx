import React from "react";
import { useRecoilValue} from "recoil"
import { todoListState } from "./TodoStore";
export default function TodoList() {
    const todoList = useRecoilValue(todoListState);
  return;
  <div>
    {todoList.map((todoItem) => (
      <TodoItem key={todoItem.id} item={todoItem} />
    ))}
  </div>;
}
