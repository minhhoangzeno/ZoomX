import React from "react";
import Slider from "react-slick";
import item1 from "../../image/Introduce/item1.png";
import item2 from "../../image/Introduce/item2.png";
import item3 from "../../image/Introduce/item3.png";
import item4 from "../../image/Introduce/item4.png";
import item5 from "../../image/Introduce/item5.png";
import item6 from "../../image/Introduce/item6.png";
export default function PartnerComponent() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Slider className="slider-block" {...settings}>
      <div>
        <img className="img-partner" src={item1} alt="#" />
      </div>
      <div>
        <img className="img-partner" src={item2} alt="#" />
      </div>
      <div>
        <img className="img-partner" src={item3} alt="#" />
      </div>
      <div>
        <img className="img-partner" src={item4} alt="#" />
      </div>
      <div>
        <img className="img-partner" src={item5} alt="#" />
      </div>
      <div>
        <img className="img-partner" src={item6} alt="#" />
      </div>
      <div>
        <img className="img-partner" src={item6} alt="#" />
      </div>
      <div>
        <img className="img-partner" src={item6} alt="#" />
      </div>
      <div>
        <img className="img-partner" src={item6} alt="#" />
      </div>
    </Slider>
  );
}
