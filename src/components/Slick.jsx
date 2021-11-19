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
      rows: 1,
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
            rows: 2,
            slidesToShow: 4,
            slidesToScroll: 1,
            
          },
        },
        {
          breakpoint: 699,
          settings: {
            rows: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="slickFlex">
        <Slider {...settings}>
          <div className="slickItem" >
            <h3>1</h3>
          </div>
          <div className="slickItem">
            <h3>2</h3>
          </div>
          <div className="slickItem">
            <h3>3</h3>
          </div>
          <div className="slickItem">
            <h3>4</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
