// import React from "react";
import React from "react";
import Slider from "react-slick";
import itemHome from "../../image/homePage/itemHome.png";
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
              <Item item={item} key={index} />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

function Item({ item }) {
  let str = item?.content;
  let arrContent = str.split("\n");
  return (
    <div className="item__element" >
      <div className="page__overlay"></div>
      <img
        className="img__page-blocks"
        src={item.imageCover.url}
        alt="#"
      />
      <div className="content__element-block">
        <p className="txt__headline">{item.title}</p>
        {arrContent?.map((content, idex) => {
          return (
            <div className="flex__item" key={idex}>
              <IconHome />
              <div className="txt__item" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}