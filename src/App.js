import { useState } from "react";
import "./App.scss";
import { NewPopup } from "./components/NewPopup";
import { DialogContent, DialogContentText } from "@material-ui/core";

function App() {
  const [open, setOpen] = useState(false);
  const togglerClickHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <button onClick={togglerClickHandler}>Open</button>
      <NewPopup
        open={open}
        togglerClickHandler={togglerClickHandler}
        title="Titile-Popup1"
        setOpen={setOpen}
        content={
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        }
      >
      </NewPopup>
    </div>
  );
}

export default App;
