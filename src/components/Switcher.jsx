import React from "react";

export const Switcher = ({ isOn, handleToggle }) => {
  return (
    <div>
      <div className="toggle">
        <input
          className="toggle__input"
          checked={isOn}
          onChange={handleToggle}
          type="checkbox"
        />
        <div className="toggle__text">
          <span className="onbtn">
            On
          </span>
          <span className="offbtn">
            Off
          </span>
        </div>
      </div>
    </div>
  );
};
