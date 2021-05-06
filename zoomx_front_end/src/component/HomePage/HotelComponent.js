import React from "react";
import main from "../../image/zoomXhomePage/main.png";
export default function HotelComponent() {
  return (
    <>
      <div className="container-fluid">
        <div className="row main">
          <div className="col-lg-6">
            <div
              className="img-hotel detail"
              style={{ backgroundImage: `url(${main})` }}
            />
          </div>
          <div className="col-lg-6 flex-element">
            <div className="detail-content">
              <p className="txt-element">WELCOME TO ZOOMX HOTELS</p>
              <div className="empty-block"></div>
              <p className="hotel-txt">Khách sạn quay ZoomX là gì ?</p>
              <p className="content-txt">
                Khách sạn quay ZoomX là khách sạn quay đầu tiên và duy nhất tại
                Việt Nam. Lấy ý tưởng thiết kế khách sạn quay 360 độ tạo nên một
                không gian sang trọng, đẳng cấp, tầm nhìn không giới hạn.
              </p>
              <button className="btn-element">XEM THÊM</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
