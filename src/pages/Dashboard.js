import React from "react";
import { Switcher } from "../components/Switcher";
import BTC from "../img/BTC.svg";
import LTC from "../img/LTC.svg";
import ETH from "../img/ETH.svg";
import USDT from "../img/USDT.svg";
import { DashboardBlueBtn } from "../components/DashboardBlueBtn";
import { SelectComponent } from "../components/SelectComponent";

export const Dashboard = () => {
  const [val, setVal] = React.useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <div className="dashboard">
      <div className="blueBlock">
        <div className="blueBlock__content">
          <div className="container">
            <div className="blueBlock__main">
              <div className="blueBlock__main-blocks">
                <div className="main__blocks-wrapper">
                  <div className="main__blocks-flex">
                    <div className="blueBlock__main-left">
                      <div className="block__header">
                        <p className="CUicon-solid_general-Wallet block__header-icon">
                          <span>Кошелек</span>
                        </p>
                        <button className="block__header-btn ">
                          <div>Перейти в раздел</div>
                          <div className="CUicon-solid_interface-Caret-right btn__arrow"></div>
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
                      <div className="blueBlock__main-btns">
                    <DashboardBlueBtn>
                      <div className="main__btns-wrapper">
                      <div>Пополнить</div>
                      <div className="CUicon-solid_interface-Plus btn__icon"></div>
                      </div>
                    </DashboardBlueBtn>
                    <DashboardBlueBtn>
                    <div className="main__btns-wrapper">
                      <div>Вывести</div>
                      <div className="CUicon-solid_files-Upload btn__icon"></div>
                    </div>
                    </DashboardBlueBtn>
                    <DashboardBlueBtn>
                    <div className="main__btns-wrapper">
                      <div>Обменять</div>
                      <div className="CUicon-interface-Exchange btn__icon"></div>
                    </div>
                    </DashboardBlueBtn>
                  </div>
                    </div>
                     <div className="blueBlock__main-right">
                      <div className="block__header">
                        <p className="CUicon-general-Pulse block__header-icon">
                          <span>Статистика</span>
                        </p>
                        <SelectComponent
                          value={val}
                          handleChange={handleChange}
                          items={[
                            { key: "В криптовалюте", value: 1 },
                            { key: "В USD", value: 2 },
                          ]}
                        />
                      </div>
                      <div className="right__items">
                        <div className="right__items-item small">
                          <div className="small__wrapper">
                            <div className="CUicon-general-Hashrate item__icon hashrate"></div>
                            <div className="item__text lefttext">
                              общая мощность майнинга
                            </div>
                            <div className="item__speed">3 280,15 TH/s</div>
                            <div className="CUicon-general-Timer item__icon timer"></div>
                            <div className="item__text righttext">
                              В ожидании запуска
                              <div className="righttext-span">12 TH/s</div>
                            </div>
                          </div>
                        </div>
                        <div className="right__items-item big">
                          <div className="big__wrapper">
                            <div className="big__item big__item-first">
                              <div className="big__item-top">
                                <div className="CUicon-general-Clock top__icon"></div>
                                <div className="top__text">
                                  Прибыль<span>за вчера</span>
                                </div>
                              </div>
                              <div className="big__item-bottom">
                                0.00004700 BTC
                              </div>
                            </div>

                            <div className="big__item big__item-sec">
                              <div className="big__item-top">
                                <div className="CUicon-general-Calendar top__icon"></div>
                                <div className="top__text">
                                  Добыто <span>за все время</span>
                                </div>
                              </div>
                              <div className="big__item-bottom">
                                2.46204700 BTC
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="blueBlock__small">
            <div className="blueBlock__small-main">
              <div className="battery__band"></div>
              <div className="small__main-wrapper">
                <div className="small__main-left">
                  <div className="CUicon-solid_status-Lightning-alt main__left-icon"></div>
                  <div className="main__left-title">
                    баланс оплаты электроэнергии
                  </div>
                  <div className="main__left-cost">$1,305.80</div>
                  <div className="main__left-days">45 дней</div>
                </div>
                <div className="small__main-right">
                  <div className="main__right-big">
                    <DashboardBlueBtn className="big__firstBtn">
                    <div className="main__btns-wrapper">
                      <div>Пополнить</div>
                      <div className="CUicon-interface-Plus btn__icon"></div>
                    </div>
                    </DashboardBlueBtn>

                    <div className="main__right-small">
                      <div>
                        <p className="right__small-title">Оплата в день</p>
                        <p className="right__small-cost">$35.20 за 596 кВт</p>
                      </div>
                      <div>
                        <p className="right__small-title">баланса хватит на</p>
                        <p className="right__small-cost">37 дней</p>
                      </div>
                    </div>
                    <div className="main__btn-goTo">
                    <DashboardBlueBtn >
                    <div className="main__btns-wrapper">
                      <div>Перейти в раздел</div>
                      <div className="CUicon-solid_interface-Caret-right btn__icon"></div>
                    </div>
                    </DashboardBlueBtn>
                    </div>
                    <div className="main__btn-settings">
                    <DashboardBlueBtn >
                    <div className="main__btns-wrapper">
                      <div>Настройки</div>
                      <div className="CUicon-interface-Settings-alt btn__icon"></div>
                    </div>
                    </DashboardBlueBtn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blueBlock__small-battery"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
