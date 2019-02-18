import React from "react";

export default function FilterBy({ onRadioButtonChange, filterBy }) {
  return (
    <div>
      <div className="form-check form-check-inline">
        <input
          type="radio"
          className="form-check-input"
          id="defaultInline1"
          name="all"
          checked={filterBy === "all" ? true : false}
          onChange={event => {
            onRadioButtonChange(event);
          }}
        />
        <label className="form-check-label" htmlFor="defaultInline1">
          All
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          type="radio"
          className="form-check-input"
          id="defaultInline2"
          name="unchecked"
          checked={filterBy === "unchecked" ? true : false}
          onChange={event => {
            onRadioButtonChange(event);
          }}
        />
        <label className="form-check-label" htmlFor="defaultInline2">
          Unchecked
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          type="radio"
          className="form-check-input"
          id="defaultInline3"
          name="archived"
          checked={filterBy === "archived" ? true : false}
          onChange={event => {
            onRadioButtonChange(event);
          }}
        />
        <label className="form-check-label" htmlFor="defaultInline3">
          Archived
        </label>
      </div>
    </div>
  );
}
