import React from "react";
import IconHome from "./IconHome";
import itemHome from "../../image/homePage/itemHome.png";
export default function ItemHome() {
  return (
    <>
      <div className="container__item-block">
        <p className="text__headline-block">WELCOME TO ZOOMX HOTELS</p>
        <div className="empty__element-block"></div>
        <p className="big__word-block">Tại sao chọn ZoomX Hotels ?</p>
        <div className="item__element">
          <div
            className={"img__page-block"}
            style={{ backgroundImage: `url(${itemHome})` }}
          />
          <div className="content__element-block">
            <p className="txt__headline">Kích thích mọi giác quan</p>
            <div className="flex__item">
              <IconHome />
              <p className="txt__item">
                Mở rộng tầm mắt ngắm nhìn không gian không giới hạn nhờ thiết kế
                quay 360 độ
              </p>
            </div>
            <div className="flex__item">
              <IconHome />
              <p className="txt__item">Chìm đắm vào những bản nhạc du dương</p>
            </div>
            <div className="flex__item">
              <IconHome />
              <p className="txt__item">
                Thư giãn cùng những hương thơm đặc trưng
              </p>
            </div>
            <div className="flex__item">
              <IconHome />
              <p className="txt__item">
                Kích thích vị giác với nhiều món ăn độc đáo đến từ khắp nơi trên
                thế giới.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
