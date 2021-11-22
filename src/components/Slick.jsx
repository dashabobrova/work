import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class SliderExample extends React.Component {
  render() {
    let settings = {
      className: "slider variable-width",
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      //rows: 1,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1040,
          settings: {
            dots: false,
            arrows: false,
            infinite: false,
            speed: 500,
            //rows: 2,
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 699,
          settings: {
            //rows: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            dotsClass: "slick-dots slick-thumb",
          },
        },
      ],
    };
    return (
      <div className="slickFlex">
        <Slider {...settings}>
          <div className="slickItem ">
            <div className="slickItem-container slickItem-first">
              <h1 className="slickItem-title">Binance × CryptoUniverse</h1>
              <div className="slickItem-text">
                Облачный майнинг уже никогда не будет прежним
              </div>
              <button className="slickItem-btn">
                <p>Начни майнинг сейчас</p>
                <span className="CUicon-solid_interface-Caret-right"></span>
              </button>
            </div>
          </div>
          <div className="slickItem">
            <div className="slickItem-container slickItem-sec">
              <h1 className="slickItem-title">Подарки новым клиентам</h1>
              <div className="slickItem-text">1 TH/s бесплатнона 10 дней</div>
              <button className="slickItem-btn">
                <p>Попробовать бесплатно</p>
                <span className="CUicon-solid_interface-Caret-right"></span>
              </button>
            </div>
          </div>
          <div className="slickItem">
            <div className="slickItem-container slickItem-th">
              <h1 className="slickItem-title">Хостинг оборудования</h1>
              <div className="slickItem-text">
                Скидка 20% на первые 6 месяцев
              </div>
              <button className="slickItem-btn">
                <p>Разместить со скидкой</p>
                <span className="CUicon-solid_interface-Caret-right"></span>
              </button>
            </div>
          </div>
          <div className="slickItem">
            <div className="slickItem-container slickItem-fth">
              <h1 className="slickItem-title">Будущее майнинга</h1>
              <div className="slickItem-text">
                Antminer S19 в наличии по лучшей цене
              </div>
              <button className="slickItem-btn">
                <p>Успеть забронировать</p>
                <span className="CUicon-solid_interface-Caret-right"></span>
              </button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
