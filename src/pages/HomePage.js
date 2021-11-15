import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <ul>
      <li>
        <Link to="/popup">Попап</Link>
      </li>
      <li>
        <Link to="/dashboard">Верстка dashboard</Link>
      </li>
    </ul>
  );
};
