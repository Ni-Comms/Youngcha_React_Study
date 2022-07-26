import React from "react";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoListCreator";
import TodoListFilters from "./TodoListFilter";
import TodoListStats from "./TodoListState";
import { useStore } from "./TodoStore";

export const TodoList = () => {
  const todoList = useStore((state) => state.filteredTodoListState());
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};
