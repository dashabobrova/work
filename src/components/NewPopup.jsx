import * as React from "react";
import { Dialog, makeStyles } from "@material-ui/core";
import CrossSvg from "../img/Cross.svg"; // CUicon-interface-Cross
import { LongBtn } from "./longBtn";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    borderRadius: 16,
  }
  
});

//TODO: кнопка закрытия - часть контента
//добавить проверку на наличие заголовка (типа если длина больше 0, то показывать - иначе нет)
export const NewPopup = ({ title, open, content, togglerClickHandler, isCross }) => {
  const classes = useStyles();

  return (
    <Dialog
    className={classes.root}
      open={open}
      onClose={togglerClickHandler}
    >
      <div className="popup__wrapper">
        <div className="popup__header">
          <h1 className="popup__header-title">{title}</h1>
          {
            isCross && <img
            className="popup__header-cross"
            src={CrossSvg}
            alt="x"
            onClick={togglerClickHandler}
          />
          }
          
        </div>
        <div className="popup__content">{content}</div>

        {
            !isCross && <LongBtn  onClick={togglerClickHandler}>ок</LongBtn>
          }

      </div>
    </Dialog>
  );
};
