import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export class SliderExample extends React.Component {
  render() {
    let settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      rows: 2,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1040,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slickFlex">
        <Slider {...settings}>
          <div className="slickItem">
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
