import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="input-group input-group-lg mb-3">
      <input
        className="form-control text-capitalize"
        type="search"
        placeholder="Search for a todo"
        onChange={onSearchChange}
        maxLength="50"
      />
    </div>
  );
};

export default SearchBox;
