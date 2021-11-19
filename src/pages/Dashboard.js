import React from "react";
import { Switcher } from "../components/Switcher";
import BTC from "../img/BTC.svg";
import LTC from "../img/LTC.svg";
import ETH from "../img/ETH.svg";
import USDT from "../img/USDT.svg";
import { SelectComponent } from "../components/SelectComponent";
import SimpleSlider, { SliderExample } from "../components/Slick";

export const Dashboard = () => {
  const [val, setVal] = React.useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <div>
      <div className="dashboard">
        <div className="blueBlock">
          <div className="blueBlock__content">
            <div className="container">
              <div className="blueBlock__main">
                <div className="blueBlock__main-parent">
                  <div className="blueBlock__main-children left-children">
                    <div className="innerChildren">
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
                              <div className="withIcon__text">
                                <p>USDT</p>
                              </div>
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
                      <div className="main__btns-container">
                        <div className="blueBlock__main-btns">
                          <button className="dashboardBlueBtn">
                            <p className="btntxt">Пополнить</p>
                            <span className="CUicon-solid_interface-Plus iconspan"></span>
                          </button>
                          <button className="dashboardBlueBtn">
                            <p className="btntxt">Вывести</p>
                            <span className="CUicon-solid_files-Upload iconspan"></span>
                          </button>
                          <button className="dashboardBlueBtn">
                            <p className="btntxt">Обменять</p>
                            <span className="CUicon-interface-Exchange iconspan"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blueBlock__main-children right-children">
                    <div className="innerChildren">
                      <div className="block__header right-header">
                        <p className="CUicon-general-Pulse block__header-icon">
                          <span>Статистика</span>
                        </p>
                        <div className="main__btns-container">
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
                                    <div className="righttext-span">
                                      12 TH/s
                                    </div>
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
                                <div className="item__speed">
                                  0.00004700 BTC
                                </div>
                              </div>

                              <div>
                                <div className="big__leftContent-wrapper big__leftContent-sec">
                                  <div className="CUicon-general-Calendar big__leftContent-icon"></div>
                                  <div className="big__leftContent-text ">
                                    добыто <span>за все время</span>
                                  </div>
                                </div>
                                <div className="item__speed">
                                  2.46204700 BTC
                                </div>
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
                {/* Battery */}
                <div className="blueBlock__small">
                  {/* контент кнопки */}
                  <div className="blueBlock__small-main">
                    <div className="small__main-container">
                      <div className="test1">
                        <div className="small__main-left">
                          <div className="CUicon-solid_status-Lightning-alt main__left-icon"></div>
                          <div className="main__left-title">
                            баланс оплаты <span>электроэнергии</span>
                          </div>
                          <div className="main__left-cost">$1,305.80</div>
                          <div className="main__left-days">45 дней</div>
                          <button className="main__left-BlueBtn left__btn-add">
                            <p>Пополнить</p>
                            <span className="CUicon-solid_interface-Plus iconspan"></span>
                          </button>
                        </div>

                        <div className="main__left-band"></div>

                        <div className="small__main-med">
                          <div>
                            <p className="right__small-title">Оплата в день</p>
                            <p className="right__small-cost">
                              $35.20 за 596 кВт
                            </p>
                          </div>
                          <div>
                            <p className="right__small-title">
                              баланса хватит на
                            </p>
                            <p className="right__small-cost">37 дней</p>
                          </div>
                        </div>
                      </div>
                      <div className="small__main-end">
                        <button className="block__header-btn end__btn-go">
                          <p>Перейти в раздел</p>
                          <span className="CUicon-solid_interface-Caret-right btn__arrow"></span>
                        </button>
                        <div className="testbtns">
                          <button className="main__left-BlueBtn end__btn-add">
                            <p className="btntxt">Пополнить</p>
                            <span className="CUicon-solid_interface-Plus iconspan"></span>
                          </button>
                          <button className="main__left-BlueBtn end__btn-settings">
                            <p className="btntxt">Настройки</p>
                            <span className="CUicon-interface-Settings-alt iconspan"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* контент кнопки */}
                  <div className="band"></div>
                </div>
                {/* Battery */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="importantUserEvents">
        <div className="container">
          <ul className="importantUserEvents__list">
            <li>
              <div className="importantUserEvents__list-item">
                <div className="item__firstgroup">
                  <div className="item__left">
                    <p className="CUicon-files-Upload item__left-icon"></p>
                    <p className="item__left-text">Вывод средств</p>
                  </div>
                  <div className="item__med">
                    Вывод 0.0050000 BTC на кошелёк
                    1njrRcKQtfjjLuQxFYCeMXcth77m5TAYo
                  </div>
                </div>
                <div>
                  <div className="item__end yellow">
                    <p className="CUicon-solid_general-Clock item__end-icon"></p>
                    <p className="item__end-text">подтвержден 2/4</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="importantUserEvents__list-item">
                <div className="item__firstgroup">
                  <div className="item__left">
                    <p className="CUicon-solid_interface-Plus item__left-icon"></p>
                    <p className="item__left-text">Пополнение</p>
                  </div>
                  <div className="item__med">
                  Пополнение баланса BTC на 0.00003000 BTC
                  </div>
                </div>
                <div>
                  <div className="item__end yellow">
                    <p className="CUicon-solid_general-Clock item__end-icon"></p>
                    <p className="item__end-text">подтвержден 0/4</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="importantUserEvents__list-item">
                <div className="item__firstgroup">
                  <div className="item__left">
                    <p className=" CUicon-files-File-user item__left-icon"></p>
                    <p className="item__left-text">Профиль</p>
                  </div>
                  <div className="item__med">
                  Электронная почта не подтверждена. Пройдите по ссылке из отправленного вам письма.
                  </div>
                </div>
                <div>
                  <div className="item__end blue">
                    <p className="CUicon-comm-Envelope item__end-icon"></p>
                    <p className="item__end-text">отправить еще раз</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="importantUserEvents__list-item">
                <div className="item__firstgroup">
                  <div className="item__left">
                    <p className=" CUicon-files-File-user item__left-icon"></p>
                    <p className="item__left-text">Профиль</p>
                  </div>
                  <div className="item__med">
                  Пройдите верификацию, чтобы увеличить лимит на операции
                  </div>
                </div>
                <div>
                  <div className="item__end blue">
                    <p className="CUicon-files-File-user item__end-icon"></p>
                    <p className="item__end-text">Верификация</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="forYou">
        <div className="container">
          <div className="slick">
            <div className="slick-wrapper">
              <div className="slick__container">
                <div className="forYou__header">
                  <div className="CUicon-solid_status-Fire forYou__header-icon"></div>
                  <div className="forYou__header-text">Для вас</div>
                </div>
                <SliderExample />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
