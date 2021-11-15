import * as React from "react";
import { Dialog, makeStyles } from "@material-ui/core";
import CrossSvg from "../img/Cross.svg"; // CUicon-interface-Cross

const useStyles = makeStyles({
  root: {
    position: "absolute",
  },
  paper: { borderRadius: 16 },
});

export const NewPopup = ({
  title,
  open,
  togglerClickHandler,
  isCross,
  children,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      classes={{
        root: classes.root,
        paper: classes.paper,
      }}
      open={open}
      onClose={togglerClickHandler}
    >
      <div className="popup__wrapper">
        <div className="popup__header">
          {title && <h1 className="popup__header-title">{title}</h1>}
          {isCross && (
            <p className="CUicon-interface-Cross popup__header-cross" onClick={togglerClickHandler}></p>
           
          )}
        </div>
        <div className="popup__content">{children}</div>
      </div>
    </Dialog>
  );
};
