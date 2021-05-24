import React from "react";
import Slider from "react-slick";
import item1 from "../../image/zoomX/item1.png";
import item2 from "../../image/zoomX/item2.png";
import item3 from "../../image/zoomX/item3.png";
import item4 from "../../image/zoomX/item4.png";
import item5 from "../../image/zoomX/item5.png";
import item6 from "../../image/zoomX/item6.png";

export default function PartnerComponent() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };


  return (

    <>
      <div className="container-fluid wrapper__partner">
        <Slider className="slider-block row" {...settings}>
          <div className="wrapper__partner__item">
            <img className="img-partner" src={item1} alt="#" />
          </div>
          <div className="wrapper__partner__item">
            <img className="img-partner" src={item2} alt="#" />
          </div>
          <div className="wrapper__partner__item">
            <img className="img-partner" src={item3} alt="#" />
          </div>
          <div className="wrapper__partner__item">
            <img className="img-partner" src={item4} alt="#" />
          </div>
          <div className="wrapper__partner__item">
            <img className="img-partner" src={item5} alt="#" />
          </div>
          <div className="wrapper__partner__item">
            <img className="img-partner" src={item6} alt="#" />
          </div>
          <div className="wrapper__partner__item">
            <img className="img-partner" src={item6} alt="#" />
          </div>
          <div className="wrapper__partner__item">
            <img className="img-partner" src={item6} alt="#" />
          </div>
          <div className="wrapper__partner__item">
            <img className="img-partner" src={item6} alt="#" />
          </div>
        </Slider>
      </div>
    </>
  );
}
