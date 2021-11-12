import { useState } from "react";
import "./App.scss";
import { NewPopup } from "./components/NewPopup";
import { Button } from "@material-ui/core";
import SwitchLabels from "./components/SwitchLabels";

function App() {
  const [open, setOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const togglerClickHandler = () => {
    setOpen(!open);
  };

  const togglerClickHandlerTest = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <div className="App">
      {/* самый простой вариант */}
      <button onClick={togglerClickHandler}>Шаблон</button>
      <NewPopup
        open={open}
        togglerClickHandler={togglerClickHandler}
        title="Шаблон"
        setOpen={setOpen}
        content={
          <p>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </p>
        }
      ></NewPopup>

      {/* Настройки */}
      <button onClick={togglerClickHandlerTest}>Настройки</button>
      <NewPopup
        open={openSettings}
        togglerClickHandler={togglerClickHandlerTest}
        title="Настройки"
        setOpen={setOpenSettings}
        content={
          <div>
            <div className="settings__toggler">
              <div className="settings__toggler-text">
                <p>
                  Оплачивать из кошелька, если на счету недостаточно средств
                </p>
              </div>
              <SwitchLabels />
            </div>
            <div className="settings__main">
              <h1 className="settings__main-title">
                Балансы для оплаты и очередность
              </h1>
            </div>
            <div className="settings__btns">
              <Button onClick={togglerClickHandlerTest}>Отмена</Button>
              <Button autoFocus>Сохранить</Button>
            </div>
          </div>
        }
      ></NewPopup>
    </div>
  );
}

export default App;
