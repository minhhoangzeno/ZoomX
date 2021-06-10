import React from "react";
import Slider from "react-slick";
import "../../style/timeline.scss";
import timelineImg from "../../image/home/timeline1.png";
import { useTimeLine } from "../../lib/API";
export default function TimeLine() {
  const { data } = useTimeLine();
  var settings = {
    // dots: true,
    speed: 3000,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 3000,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <>
        <div className="timelineBlock">
          <div className="timeline-head">
            <p className="timeline-head__title">
              WELCOME &nbsp; TO &nbsp; ZOOMX&nbsp; HOTELS
            </p>
            <div className="timeline-head__border"></div>
            <p className="timeline-head__label">Lộ trình triển khai</p>
          </div>
          <div className="timeline__wrapper timeline__web">
            <div className="container-fluid timeline">
              <div className="row timeline__content">
                {data?.map((item, index) => {
                  return (
                    <div className="timeline__content__item" key={index}>
                      <div className="timeline__content__item--text">
                        <div className="wrapper__text">
                          <p>{item.label}</p>
                          <p>{item.content}</p>
                        </div>
                      </div>
                      <div className="timeline__content__item--number">
                        {index + 1}
                      </div>
                      <div className="timeline__content__item--border"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="img-borderBottom">
            <img alt="" src={timelineImg} />
          </div>

          <div className="timeline-mobile">
            <div className="container-fluid timeline-mobile__content">
              <Slider className="row" {...settings}>
                {data?.map((item, index) => {
                  return (
                    <div
                      className="col-4 col-item"
                      style={{ maxWidth: "100%" }}
                    >
                      <div className="timeline__content__item">
                        <div className="timeline__content__item--text">
                          <div className="wrapper__text">
                            <p>{item.label}</p>
                            <p>{item.content}</p>
                          </div>
                        </div>
                        <div className="timeline__content__item--number">
                          {index + 1}
                        </div>
                        <div className="timeline__content__item--border"></div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
