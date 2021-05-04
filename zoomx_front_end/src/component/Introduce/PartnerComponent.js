import React from "react";
import Slider from "react-slick";
import item1 from "../../image/home/item1.png";
import item2 from "../../image/home/item2.png";
import item3 from "../../image/home/item3.png";
import item4 from "../../image/home/item4.png";
import item5 from "../../image/home/item5.png";
import item6 from "../../image/home/item6.png";
export default function PartnerComponent() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
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
