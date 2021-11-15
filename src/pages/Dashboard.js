import React from "react";

export const Dashboard = () => {
  /* 
    Синий блок, в нем 2 белых друг за другом. Внутри белого гриды
    Свитчер у меня есть, кнопки тоже есть сверстанные */
  return (
    <div className="dashboard">
      <div className="blueBlock">
        <div className="blueBlock__content">
          <div className="blueBlock__main">
            <div className="blueBlock__main-blocks">
              <div className="blueBlock__main-left">
              <div className="left__header">
                  <p className="CUicon-solid_general-Wallet left__header-wallet">Кошелек</p>
                  <button className="left__header-btn ">Перейти в раздел<span className="CUicon-solid_interface-Caret-right"></span></button>
                </div>
              </div>
              <div className="blueBlock__main-right"></div>
            </div>
            <div className="blueBlock__main-btns"></div>
          </div>

          <div className="blueBlock__small">
            <div className="blueBlock__small-main">sec</div>
            <div className="blueBlock__small-battery"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
