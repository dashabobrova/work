import React from "react";
import { Switcher } from "../components/Switcher";
import BTC from "../img/BTC.svg";
import LTC from "../img/LTC.svg";
import ETH from "../img/ETH.svg";
import USDT from "../img/USDT.svg";
import {
  Container
} from "@material-ui/core";


export const Dashboard = () => {

  return (
    <Container>
      <div className="dashboard">
        <div className="blueBlock">
          <div className="blueBlock__content">
            <div className="blueBlock__main">
              <div className="blueBlock__main-blocks">
                <div className="blueBlock__main-left">
                  <div className="block__header">
                    <p className="CUicon-solid_general-Wallet block__header-icon">
                      <span>Кошелек</span>
                    </p>
                    <button className="block__header-btn ">
                      Перейти в раздел
                      <span className="CUicon-solid_interface-Caret-right"></span>
                    </button>
                  </div>
                  <ul className="left__main">
                    <li>
                      <div className="left__main-item">
                        <div className="item__start">Общий баланс</div>
                        <div className="item__med bold">0.68954789 BTC</div>
                        <div className="item__end">≈ $3 468</div>
                      </div>
                    </li>
                    <li>
                      <div className="left__main-item">
                        <div className="item__start-withIcon lightOrange">
                          <div className="withIcon__round orange">
                            <img src={BTC} alt="BTC" />
                          </div>
                          <p className="withIcon__text">BTC</p>
                        </div>
                        <div className="item__med ">0.68954789 BTC</div>
                        <div className="item__end">≈ $3 468</div>
                      </div>
                    </li>
                    <li>
                      <div className="left__main-item">
                        <div className="item__start-withIcon lightGrey">
                          <div className="withIcon__round grey">
                            <img src={LTC} alt="LTC" />
                          </div>
                          <p className="withIcon__text">LTC</p>
                        </div>
                        <div className="item__med">3.64895232 LTC</div>
                        <div className="item__end">≈ $1 249</div>
                      </div>
                    </li>
                    <li>
                      <div className="left__main-item">
                        <div className="item__start-withIcon lightBlue">
                          <div className="withIcon__round blue">
                            <img src={ETH} alt="ETH" />
                          </div>
                          <p className="withIcon__text">ETH</p>
                        </div>
                        <div className="item__med">0.25195233 ETH</div>
                        <div className="item__end">≈ $674</div>
                      </div>
                    </li>
                    <li>
                      <div className="left__main-item">
                        <div className="item__start-withIcon lightGreen">
                          <div className="withIcon__round green">
                            <img src={USDT} alt="USDT" />
                          </div>
                          <p className="withIcon__text">USDT</p>
                        </div>
                        <div className="item__med">370.32434332 USDT</div>
                        <div className="item__end">≈ $370</div>
                      </div>
                    </li>
                  </ul>
                  <div className="left_switcherBlock">
                    <Switcher />
                    <p className="left_switcherBlock-text">
                      Скрыть пустые балансы
                    </p>
                  </div>
                </div>
                <div className="blueBlock__main-right">
                  <div className="block__header">
                    <p className="CUicon-general-Pulse block__header-icon">
                      <span>Статистика</span>
                    </p>
              
                    
                  </div>
                </div>
              </div>

              <div className="blueBlock__main-btns">
                <button>btn</button>
                <button>btn</button>
                <button>btn</button>
              </div>
            </div>

            <div className="blueBlock__small">
              <div className="blueBlock__small-main">sec</div>
              <div className="blueBlock__small-battery"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
