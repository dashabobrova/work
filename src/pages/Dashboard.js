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
              <div className="blueBlock__main-wrapper">
                  <div>
                  </div>
                  <div></div>
              </div>
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
