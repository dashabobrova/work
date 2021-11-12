import * as React from "react";
import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  makeStyles
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";

const useStyles = makeStyles({
    dialog: {
      position: 'absolute',
      width: 400,
      minHeight: 210,
    }
  });
  

export const NewPopup = ({ title, setOpen, open, content }) => {
  const togglerGlickHandler = () => {
    setOpen(!open);
  };

  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" onClick={togglerGlickHandler}>
        Open
      </Button>
      <Dialog
      classes={{
        paper: classes.dialog
      }}

        open={open}
        onClose={togglerGlickHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <IconButton aria-label="Delete" onClick={togglerGlickHandler}>
            <SvgIcon>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5899 0.410068C16.1367 0.956825 16.1367 1.84329 15.5899 2.39005L2.39005 15.5899C1.84329 16.1367 0.956825 16.1367 0.410068 15.5899C-0.136689 15.0432 -0.136689 14.1567 0.410068 13.61L13.61 0.410068C14.1567 -0.136689 15.0432 -0.136689 15.5899 0.410068Z"
                fill="#0E46C0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5899 15.5899C15.0432 16.1367 14.1567 16.1367 13.6099 15.5899L0.410067 2.39005C-0.136689 1.84329 -0.136689 0.956824 0.410068 0.410067C0.956825 -0.13669 1.84329 -0.136689 2.39005 0.410068L15.5899 13.61C16.1367 14.1567 16.1367 15.0432 15.5899 15.5899Z"
                fill="#0E46C0"
              />
            </SvgIcon>
          </IconButton>
        <DialogContent>
         {content}
        </DialogContent>
        
      </Dialog>
    </div>
  );
};
