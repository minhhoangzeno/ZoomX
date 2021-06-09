// import React from "react";
import React from "react";
import Slider from "react-slick";
import { useReasonSelect } from "../../lib/API";
import IconHome from "./IconHome";
export default function ItemHome() {
  const { data } = useReasonSelect();
  const settings = {
    infinite: true,
    speed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container__item-block">
      <p className="text__headline-block">
        WELCOME &nbsp; TO &nbsp; ZOOMX&nbsp; HOTELS
      </p>
      <div className="empty__element-block"></div>
      <p className="big__word-block">Tại sao chọn ZoomX Hotels ?</p>
      <div className="item__element">
        <Slider className="main__details" {...settings}>
          {data?.map((item, index) => {
            return (
              <div className="item__element" key={index}>
                <div className="page__overlay"></div>
                <img
                  className="img__page-blocks"
                  src={item.imageCover.url}
                  alt="#"
                />
                <div className="content__element-block">
                  <p className="txt__headline">{item.title}</p>
                  <div className="flex__item">
                    <IconHome />
                    <p
                      className="txt__item"
                      dangerouslySetInnerHTML={{ __html: data[0]?.content }}
                    ></p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
