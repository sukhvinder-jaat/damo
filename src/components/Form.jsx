import React from "react";
import { useState } from "react";

export const Form = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");
  return (
    <div className="d-flex align-items-center">
      <div className="dropdown">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn"
        >
          {selected}
          <span
            className={
              isActive
                ? "fas fa-caret-up bg-black"
                : "fas fa-caret-down bg-black"
            }
          />
        </div>
        <div
          className="dropdown-content"
          style={{ display: isActive ? "block" : "none" }}
        >
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item bg-black text-white"
          >
            One
          </div>
          <div
            className="item bg-black text-white"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Two
          </div>
          <div
            className="item bg-black text-white"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Three
          </div>
        </div>
      </div>
    </div>
  );
};
