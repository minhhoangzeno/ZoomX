import React from "react";
import IconHome from "./IconHome";
import itemHome from "../../image/homePage/itemHome.png";
import Slider from "react-slick";
import { useReasonSelect } from "../../lib/API";
export default function ItemHome() {
  const { data } = useReasonSelect();
  const item = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {data?.map((item, index) => {
        return (
          <>
            <div className="container__item-block" key={index}>
              <p className="text__headline-block">
                WELCOME &nbsp; TO &nbsp; ZOOMX&nbsp; HOTELS
              </p>
              <div className="empty__element-block"></div>
              <p className="big__word-block">Tại sao chọn ZoomX Hotels ?</p>
              <div className="slider__container">
                <Slider className="main__detail">
                  <img
                    className="img__page-block"
                    src={item.imageCover.url}
                    alt="#"
                  />
                  <div className="page__overlay"></div>
                </Slider>
                <div className="item__element">
                  <div className="content__element-block">
                    <p className="txt__headline">{item.title}</p>
                    <div className="flex__item">
                      <IconHome />
                      <p className="txt__item">
                        {/* Mở rộng tầm mắt ngắm nhìn không gian không giới hạn nhờ
                        thiết kế quay 360 độ */}
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
