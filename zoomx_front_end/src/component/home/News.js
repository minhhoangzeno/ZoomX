import React from "react";
import Slider from "react-slick";
import vn from "../../image/homePage/vn.png";
import vn1 from "../../image/homePage/vn1.png";
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
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
    <div className="main__view--slider">
      <p className="text__headline--view">WELCOME TO ZOOMX HOTELS</p>
      <div className="empty__element-view"></div>
      <p className="big__word-view">Tin tức</p>
      <Slider className="main__slider" {...settings}>

        <div className="slider__item__cover">
          <div className="item-block" style={{ backgroundImage: `url(${vn})` }}>

            <div className="news-content">
              <p className="item__content">Tháng 4 30, 2021</p>
              <p className="item__content-cover">
                Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
              </p>
              <div className="item__btn-main">XEM THÊM</div>
            </div>
          </div>
        </div>

        <div className="slider__item__cover">
          <div className="item-block" style={{ backgroundImage: `url(${vn})` }}>

            <div className="news-content">
              <p className="item__content">Tháng 4 30, 2021</p>
              <p className="item__content-cover">
                Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
              </p>
              <div className="item__btn-main">XEM THÊM</div>
            </div>
          </div>
        </div>

        <div className="slider__item__cover">
          <div className="item-block" style={{ backgroundImage: `url(${vn})` }}>

            <div className="news-content">
              <p className="item__content">Tháng 4 30, 2021</p>
              <p className="item__content-cover">
                Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
              </p>
              <div className="item__btn-main">XEM THÊM</div>
            </div>
          </div>
        </div>
        <div className="slider__item__cover">
          <div className="item-block" style={{ backgroundImage: `url(${vn})` }}>

            <div className="news-content">
              <p className="item__content">Tháng 4 30, 2021</p>
              <p className="item__content-cover">
                Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
              </p>
              <div className="item__btn-main">XEM THÊM</div>
            </div>
          </div>
        </div>

      </Slider>
      <div className="btn__item-click">
        <button>XEM THÊM</button>
      </div>
    </div>
  );
}
