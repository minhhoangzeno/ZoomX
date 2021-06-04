import React from "react";
import Slider from "react-slick";
import "../../style/timeline.scss";
import timelineImg from "../../image/home/timeline1.png";
export default function TimeLine() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 427,
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
            <div className="timeline__content__item">
              <div className="timeline__content__item--text">
                <div className="wrapper__text">
                  <p>Tham vọng</p>
                  <p>
                    Mang ý tưởng và thiết kế khách sạn quay ZoomX đến với nhiều
                    quốc gia khác trên thế giới.Khẳng định giá trị trí tuệ của
                    con người Việt Nam.
                  </p>
                </div>
              </div>
              <div className="timeline__content__item--number">1</div>
              <div className="timeline__content__item--border"></div>
            </div>

            <div className="timeline__content__item">
              <div className="timeline__content__item--text">
                <div className="wrapper__text">
                  <p>Tham vọng</p>
                  <p>
                    Mang ý tưởng và thiết kế khách sạn quay ZoomX đến với nhiều
                    quốc gia khác trên thế giới.Khẳng định giá trị trí tuệ của
                    con người Việt Nam.
                  </p>
                </div>
              </div>
              <div className="timeline__content__item--number">2</div>
              <div className="timeline__content__item--border"></div>
            </div>

            <div className="timeline__content__item">
              <div className="timeline__content__item--text">
                <div className="wrapper__text">
                  <p>Tham vọng</p>
                  <p>
                    Mang ý tưởng và thiết kế khách sạn quay ZoomX đến với nhiều
                    quốc gia khác trên thế giới.Khẳng định giá trị trí tuệ của
                    con người Việt Nam.
                  </p>
                </div>
              </div>
              <div className="timeline__content__item--number">3</div>
              <div className="timeline__content__item--border"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="img-borderBottom">
        <img alt="" src={timelineImg} />
      </div>
      <div className="timeline-mobile">
        <div className="container-fluid timeline-mobile__content">
          <Slider className="row" {...settings}>
            <div className="col-4 col-item" style={{ maxWidth: "100%" }}>
              <div className="timeline__content__item">
                <div className="timeline__content__item--text">
                  <div className="wrapper__text">
                    <p>Tham vọng</p>
                    <p>
                      Mang ý tưởng và thiết kế khách sạn quay ZoomX đến với
                      nhiều quốc gia khác trên thế giới.Khẳng định giá trị trí
                      tuệ của con người Việt Nam.
                    </p>
                  </div>
                </div>
                <div className="timeline__content__item--number">1</div>
                <div className="timeline__content__item--border"></div>
              </div>
            </div>
            <div className="col-4 col-item" style={{ maxWidth: "100%" }}>
              <div className="timeline__content__item">
                <div className="timeline__content__item--text">
                  <div className="wrapper__text">
                    <p>Tham vọng</p>
                    <p>
                      Mang ý tưởng và thiết kế khách sạn quay ZoomX đến với
                      nhiều quốc gia khác trên thế giới.Khẳng định giá trị trí
                      tuệ của con người Việt Nam.
                    </p>
                  </div>
                </div>
                <div className="timeline__content__item--number">2</div>
                <div className="timeline__content__item--border"></div>
              </div>
            </div>
            <div className="col-4 col-item" style={{ maxWidth: "100%" }}>
              <div className="timeline__content__item">
                <div className="timeline__content__item--text">
                  <div className="wrapper__text">
                    <p>Tham vọng</p>
                    <p>
                      Mang ý tưởng và thiết kế khách sạn quay ZoomX đến với
                      nhiều quốc gia khác trên thế giới.Khẳng định giá trị trí
                      tuệ của con người Việt Nam.
                    </p>
                  </div>
                </div>
                <div className="timeline__content__item--number">3</div>
                <div className="timeline__content__item--border"></div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
