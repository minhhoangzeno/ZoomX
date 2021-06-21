import React from "react";
import { useHistory } from "react-router";
import "../../style/style.scss";
import Slider from "react-slick";
import { useHero } from "../../lib/API";

export default function HeroHeader() {
  const { data } = useHero();
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
      <Slider className="hero__slider" {...settings}>
        {data?.map((item, index) => {
          return (
            <div className="hero" key={index}>
              <div className="main__hero">
                <img className="hero__image" src={item.imageCover.url} alt="" />
                <div className="container-fluid hero__content">
                  <div className="hero__content--top">{item.title}</div>
                  <div className="hero__content--empty"></div>
                  <div className="hero__content--mid">{item.label}</div>
                  <div className="hero__content--bottom">
                    <button onClick={() => history.push("/zoomx")}>
                      XEM THÊM
                    </button>
                  </div>
                </div>
                <div className="hero__overlay"></div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
