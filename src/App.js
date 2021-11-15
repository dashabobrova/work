import { useState } from "react";
import "./App.scss";
import { ConfirmButton } from "./components/confirmButton";
import { NewPopup } from "./components/NewPopup";
import { Switcher } from "./components/Switcher";
import { currency } from "./utils/currency";

function App() {
  const [open, setOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openOk, setOpenOk] = useState(false);

  const [isOn, setIsOn] = useState(true);

  const togglerClickHandler = () => {
    setOpen(!open);
  };

  const togglerClickHandlerTest = () => {
    setOpenSettings(!openSettings);
  };

  const togglerClickHandlerOk = () => {
    setOpenOk(!openOk);
  }

  const [checkedState, setCheckedState] = useState(
    new Array(currency.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
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
        isCross={false}
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
              <div className="settings__toggler-toggler">
                <Switcher isOn={isOn} handleToggle={() => setIsOn(!isOn)} />
              </div>
            </div>
            <div className="settings__main">
              <h1 className="settings__main-title">
                Балансы для оплаты и очередность
              </h1>
              <ul className="settings__main-list">
                {currency.map((currency, index) => {
                  return (
                    <li key={index}>
                      <div>
                        <input
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          className="custom-checkbox"
                          name={currency.name}
                          value={currency.name}
                          checked={checkedState[index]}
                          onChange={() => handleOnChange(index)}
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>
                          {currency.name}
                        </label>
                      </div>
                      {/* {
                        checkedState[index] == true && <p>yes</p>
                      } */}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="settings__btns">
              <ConfirmButton onClick={togglerClickHandlerTest}>
                Отмена
              </ConfirmButton>
              <ConfirmButton onClick={togglerClickHandlerTest} autoFocus>
                Сохранить
              </ConfirmButton>
            </div>
          </div>
        }
        isCross={true}
      ></NewPopup>

      {/* ОК вместо крестика на закрытие */}
      <button onClick={togglerClickHandlerOk}>Ок</button>
      <NewPopup
        open={openOk}
        togglerClickHandler={togglerClickHandlerOk}
        title="Шаблон"
        setOpen={setOpenOk}
        content={
          <p>
            Вы подписались на сообщения о поступлении новых серий совместных
            покупок. Как только они появятся в продаже — мы свяжемся c вами.
          </p>
        }
        isCross={false}
      ></NewPopup>
    </div>
  );
}

export default App;
