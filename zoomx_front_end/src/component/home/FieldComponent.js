import React from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import { useInvestment } from "../../lib/API";
export default function FieldComponent() {
  const { data } = useInvestment();
  let history = useHistory();
  const item = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
    <>
      <div className="main__field">
        <p className="text__headline--field">
          WELCOME &nbsp; TO &nbsp; ZOOMX&nbsp; HOTELS
        </p>
        <div className="empty__element--field"></div>
        <p className="big__word--field">Lĩnh vực đầu tư</p>
        <Slider className="main__slider--item" {...item}>
          {data?.map((item, index) => {
            return (
              <div className="item__field__size" key={index}>
                <div className="item__field__wrapper">
                  <img
                    className="img__field"
                    src={item.imageCover.url}
                    alt="#"
                  />
                  <div className="box__item">
                    <p className="txt__number">
                      {index < 9 ? `0${index + 1}` : index + 1} /
                    </p>
                    <p className="txt__adress">Lĩnh vực</p>
                    <p className="txt__hotel">{item.investmentName}</p>
                    <div className="empty__box"></div>
                    <button
                      className="btn__field"
                      onClick={() => {
                        history.push({
                          pathname: "/project",
                          state: item?._id,
                        });
                      }}
                    >
                      XEM THÊM
                    </button>
                  </div>
                  <div className="img__field--overlay"></div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
