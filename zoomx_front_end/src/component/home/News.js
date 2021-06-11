import Slider from "react-slick";
import React from "react";
import listItem from "../image/newPage/listItem.png";
export default function News() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
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
    <div className="main__view--slider">
      <p className="text__headline--view">
        WELCOME &nbsp; TO &nbsp; ZOOMX&nbsp; HOTELS
      </p>
      <div className="empty__element-view"></div>
      <p className="big__word-view">Tin tức</p>
      <Slider className="main__slider" {...settings}>
        <div>
          <div className="block__detail">
            <img className="img__news" src={listItem} alt="#" />
            <div className="ingredient__item">
              <div className="item__wrap">
                <p className="txt__small">TIPS & TRICK</p>
                <div className="empty__item"></div>
                <p className="txt__content">ád</p>
                <button className="btn__news">XEM THÊM</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="block__detail">
            <img className="img__news" src={listItem} alt="#" />
            <div className="ingredient__item">
              <div className="item__wrap">
                <p className="txt__small">TIPS & TRICK</p>
                <div className="empty__item"></div>
                <p className="txt__content">ád</p>
                <button className="btn__news">XEM THÊM</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="block__detail">
            <img className="img__news" src={listItem} alt="#" />
            <div className="ingredient__item">
              <div className="item__wrap">
                <p className="txt__small">TIPS & TRICK</p>
                <div className="empty__item"></div>
                <p className="txt__content">ád</p>
                <button className="btn__news">XEM THÊM</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="block__detail">
            <img className="img__news" src={listItem} alt="#" />
            <div className="ingredient__item">
              <div className="item__wrap">
                <p className="txt__small">TIPS & TRICK</p>
                <div className="empty__item"></div>
                <p className="txt__content">ád</p>
                <button className="btn__news">XEM THÊM</button>
              </div>
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
