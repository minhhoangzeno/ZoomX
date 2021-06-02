import React from "react";
import Slider from "react-slick";
import icon1 from "../../image/homePage/icon1.png";
import icon2 from "../../image/homePage/icon2.png";
import icon3 from "../../image/homePage/icon3.png";
import icon4 from "../../image/homePage/icon4.png";
import { useInvestment } from "../../lib/API";
export default function FieldComponent() {
  const { data } = useInvestment();
  const item = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
              <>
                <div className="item__field__size" key={index}>
                  <div className="item__field__wrapper">
                    <div className="box__img">
                      <img
                        className="img__field"
                        src={item.imageCover.url}
                        alt="#"
                      />
                    </div>
                    <div className="box__item">
                      <p className="txt__number">{index + 1}</p>
                      <p className="txt__adress">Lĩnh vực</p>
                      <p className="txt__hotel">{item.investmentName}</p>
                      <div className="empty__box"></div>
                      <button className="btn__field">XEM THÊM</button>
                    </div>
                    <div className="img__field--overlay"></div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
