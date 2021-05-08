import React from "react";
import Slider from "react-slick";
import vn from "../../image/homePage/vn.png";
import vn1 from "../../image/homePage/vn1.png";
import vn2 from "../../image/homePage/vn2.png";
export default function News() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="main__view--slider">
      <p className="text__headline--view">WELCOME TO ZOOMX HOTELS</p>
      <div className="empty__element-view"></div>
      <p className="big__word-view">Khách sạn quay ZoomX là gì ?</p>
      <Slider className="main__slider" {...settings}>
        <div className="slider__item__cover">
          <img className="news__img" src={vn} alt="#" />
          <p className="item__content"> Tháng 4 30, 2021</p>
          <p className="item__content-cover">
            Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
          </p>
        </div>
        <div className="slider__item__cover">
          <img className="news__img" src={vn1} alt="#" />
          <p className="item__content"> Tháng 4 30, 2021</p>
          <p className="item__content-cover">
            Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
          </p>
        </div>
        <div className="slider__item__cover">
          <img className="news__img" src={vn2} alt="#" />
          <p className="item__content"> Tháng 4 30, 2021</p>
          <p className="item__content-cover">
            Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
          </p>
        </div>
        <div className="slider__item__cover">
          <img className="news__img" src={vn} alt="#" />
          <p className="item__content"> Tháng 4 30, 2021</p>
          <p className="item__content-cover">
            Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
          </p>
        </div>
      </Slider>
      <button className="btn__item-click">XEM THÊM</button>
    </div>
  );
}
