import React from "react";
import Slider from "react-slick";
import { usePartner } from "../../lib/API";

export default function PartnerComponent() {
  const { data } = usePartner();
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid wrapper__partner">
        <div className="wrapper__partner__label">Đối tác</div>
        <Slider className="slider-block row" {...settings}>
          {data?.map((item, index) => {
            return (
              <div className="wrapper__partner__item" key={index}>
                <img className="img-partner" src={item.logo.url} alt="#" />
              </div>
            );
          })}
        </Slider>
      </div>
      );
    </>
  );
}
