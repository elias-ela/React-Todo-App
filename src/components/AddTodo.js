import React from "react";

const AddTodo = ({ onAddInputChange, onAddClick, AddInput }) => {
  return (
    <React.Fragment>
      <form>
        <div className="input-group input-group-lg mb-3">
          <input
            className="form-control text-capitalize"
            type="text"
            value={AddInput}
            placeholder="Type a New Todo"
            onChange={onAddInputChange}
            maxLength="50"
          />
          <div className="input-group-append">
            <button
              className="btn btn-secondary"
              type="submit"
              onClick={onAddClick}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
export default AddTodo;
