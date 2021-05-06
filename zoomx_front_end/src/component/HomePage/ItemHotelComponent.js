import React from "react";
import item from "../../image/zoomXhomePage/item.png";
export default function ItemHotelComponent() {
  return (
    <>
      <div className="main-item">
        <p className="txt-element">WELCOME TO ZOOMX HOTELS</p>
        <div className="empty-block"></div>
        <p className="hotel-txt">Tại sao chọn ZoomX Hotels ?</p>
        <div className="item-sense">
          <div
            className="img-home"
            style={{ backgroundImage: `url(${item})` }}
          />
          <div className="empty-left">
            <p>Kích thích mọi giác quan</p>
            <div className="element-block">
              {/* <img src={} alt="#"/> */}
              <p>
                Mở rộng tầm mắt ngắm nhìn không gian không giới hạn nhờ thiết kế
                quay 360 độ
              </p>
            </div>
            <div className="element-block">
              {/* <img src={} alt="#"/> */}
              <p>Chìm đắm vào những bản nhạc du dương</p>
            </div>
            <div className="element-block">
              {/* <img src={} alt="#"/> */}
              <p>Thư giãn cùng những hương thơm đặc trưng </p>
            </div>
            <div className="element-block">
              {/* <img src={} alt="#"/> */}
              <p>
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
