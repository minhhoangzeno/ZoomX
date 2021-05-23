import React from "react";
import item from "../../image/homePage/item.png";

export default function HomePage() {
  return (
    <>
      <div className="home-page">
        <div className="container-fluid">
          <div className="row about__range">
            <div className="col-lg-6">
              <div
                className={"img__page"}
                style={{ backgroundImage: `url(${item})` }}
              />
            </div>
            <div className="col-lg-6 wrap__element">
              <div className="flex__element">
                <p className="text__headlines">WELCOME TO ZOOMX HOTELS</p>
                <div className="empty__element"></div>
                <p className="big__word--detail">
                  Khách sạn quay ZoomX là gì ?
                </p>
                <p className="title__element">
                  Khách sạn quay ZoomX là khách sạn quay đầu tiên và duy nhất
                  tại Việt Nam. Lấy ý tưởng thiết kế khách sạn quay 360 độ tạo
                  nên một không gian sang trọng, đẳng cấp, tầm nhìn không giới
                  hạn.
                </p>
                <button className="next_element">XEM THÊM</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
