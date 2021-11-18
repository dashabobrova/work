import React from "react";
import { Switcher } from "../components/Switcher";
import BTC from "../img/BTC.svg";
import LTC from "../img/LTC.svg";
import ETH from "../img/ETH.svg";
import USDT from "../img/USDT.svg";
import { SelectComponent } from "../components/SelectComponent";

export const Dashboard = () => {
  const [val, setVal] = React.useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <div class="dashboard">
      <div class="blueBlock">
        <div class="blueBlock__content">
          <div class="container">
            <div class="blueBlock__main">
              <div class="blueBlock__main-parent">
                <div class="blueBlock__main-children left-children">
                  <div class="innerChildren">
                    <div className="block__header">
                      <p className="CUicon-solid_general-Wallet block__header-icon">
                        <span>Кошелек</span>
                      </p>
                      <button className="block__header-btn ">
                        <p>Перейти в раздел</p>
                        <span className="CUicon-solid_interface-Caret-right btn__arrow"></span>
                    
                      </button>
                    </div>
                    {/* /// */}
                    <ul className="left__main">
                      <li>
                        <div className="left__main-item first-item">
                          <div className="item__start">Общий баланс</div>
                          <div className="item__med bold">0.68954789 BTC</div>
                          <div className="item__end">≈ $3 468</div>
                        </div>
                      </li>
                      <li>
                        <div className="left__main-item other-item">
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
                        <div className="left__main-item other-item">
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
                        <div className="left__main-item other-item">
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
                        <div className="left__main-item other-item">
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

                    {/* Кнопки */}
                    <div className="blueBlock__main-btns">
                      <button className="dashboardBlueBtn">
                        <p className='btntxt'>Пополнить</p>
                        <span className="CUicon-solid_interface-Plus iconspan"></span>
                      </button>
                      <button className="dashboardBlueBtn">
                        <p className='btntxt'>Вывести</p>
                        <span className="CUicon-solid_files-Upload iconspan"></span>
                      </button>
                      <button className="dashboardBlueBtn">
                        <p className='btntxt'>Обменять</p>
                        <span className="CUicon-interface-Exchange iconspan"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="blueBlock__main-children right-children">
                  <div class="innerChildren">
                    <div className="block__header right-header">
                      <p className="CUicon-general-Pulse block__header-icon">
                        <span>Статистика</span>
                      </p>
                      <div className="block__header-select">
                      <SelectComponent
                        value={val}
                        handleChange={handleChange}
                        items={[
                          { key: "В криптовалюте", value: 1 },
                          { key: "В USD", value: 2 },
                        ]}
                      />
                      </div>
                    </div>
                    {/* /// НАЧИНКА ПРАВОГО БЛОКА */}
                    <div className="right__items">
                      <div className="right__items-item item__top">
                        <div>
                          <div className="small__wrapper">
                            <div className="item__text lefttext">
                              <div className="CUicon-general-Hashrate item__icon hashrate"></div>
                              общая мощность майнинга
                            </div>
                            <div className="item__speed item__speed-positionGrid">
                              3 280,15 TH/s
                            </div>

                            <div>
                              <div className="item__text righttext">
                                <div className="CUicon-general-Timer item__icon timer"></div>
                                <div>
                                  В ожидании запуска
                                  <div className="righttext-span">12 TH/s</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right__items-item bottom">
                        {/* /// */}
                        <div>
                          <div className="big__wrapper">
                            <div>
                              <div className="big__leftContent-wrapper">
                                <div className="CUicon-general-Clock big__leftContent-icon"></div>
                                <div className="big__leftContent-text">
                                  прибыль <span>за вчера</span>
                                </div>
                              </div>
                              <div className="item__speed">0.00004700 BTC</div>
                            </div>

                            <div>
                              <div className="big__leftContent-wrapper">
                                <div className="CUicon-general-Calendar big__leftContent-icon"></div>
                                <div className="big__leftContent-text">
                                  добыто <span>за все время</span>
                                </div>
                              </div>
                              <div className="item__speed">2.46204700 BTC</div>
                            </div>
                          </div>
                        </div>
                        {/* /// */}
                      </div>
                    </div>
                    {/* /// */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
