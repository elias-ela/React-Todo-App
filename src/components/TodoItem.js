import React from "react";

const TodoItem = ({ onChecked, todoItem, onDeleteButtonClick }) => {
  let { id, text, status } = todoItem;
  return (
    <div>
      <ul className="list-group text-capitalize">
        <li className="list-group-item">
          <input
            type="checkbox"
            id={id}
            value={id}
            name={id}
            defaultChecked={status ? "" : "checked"}
            onChange={e => onChecked(id, e)}
          />{" "}
          <label
            htmlFor={id}
            style={
              status
                ? { textDecorationLine: "" }
                : {
                    textDecorationLine: "line-through",
                    textDecorationColor: "red"
                  }
            }
          >
            {text}
          </label>
          <button
            className="btn btn-danger btn-sm float-right"
            type="button"
            onClick={e => onDeleteButtonClick(id, e)}
          >
            X
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
