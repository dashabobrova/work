import * as React from "react";
import { Dialog, makeStyles } from "@material-ui/core";
import CrossSvg from "../img/Cross.svg"; // CUicon-interface-Cross

const useStyles = makeStyles({
  position: "absolute",
  width: 400,
  minHeight: 210,
  borderRadius: 16,
});

export const NewPopup = ({ title, open, content, togglerClickHandler }) => {
  const classes = useStyles();

  return (
    <Dialog
      classes={{ paper: classes }}
      open={open}
      onClose={togglerClickHandler}
    >
      <div className="popup__wrapper">
        <div className="popup__header">
          <h1 className="popup__header-title">{title}</h1>
          <img
            className="popup__header-cross"
            src={CrossSvg}
            alt="x"
            onClick={togglerClickHandler}
          />
        </div>
        <div className="popup__content">{content}</div>
      </div>
    </Dialog>
  );
};
