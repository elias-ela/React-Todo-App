import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoItems, onChecked, onDeleteButtonClick }) => {
  return (
    <div>
      {todoItems.map(todoItem => {
        return (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            onChecked={onChecked}
            onDeleteButtonClick={onDeleteButtonClick}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
