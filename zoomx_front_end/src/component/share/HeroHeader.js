import React from "react";
import { useHistory } from "react-router";
import "../../style/style.scss";
import hero from "../../image/home/hero.png";
import Slider from "react-slick";

export default function HeroHeader() {
  const settings = {
    infinite: true,
    speed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const history = useHistory();
  return (
    <>
      <div className="hero">
        <Slider
          style={{ height: "100vh" }}
          className="hero__slider"
          {...settings}
        >
          <img className="hero__image" src={hero} alt="" />
          <img className="hero__image" src={hero} alt="" />
          <img className="hero__image" src={hero} alt="" />
        </Slider>
        <div className="container-fluid hero__content">
          <div className="hero__content--top">
            WELCOME &nbsp; TO&nbsp; ZOOMX&nbsp; HOTELS
          </div>
          <div className="hero__content--empty"></div>
          <div className="hero__content--mid">Difference in every second</div>
          <div className="hero__content--bottom">
            <button onClick={() => history.push("/zoomx")}>XEM THÊM</button>
          </div>
        </div>
        <div className="hero__overlay"></div>
      </div>
    </>
  );
}
