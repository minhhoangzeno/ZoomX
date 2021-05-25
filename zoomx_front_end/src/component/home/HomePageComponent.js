import React from "react";
import item from "../../image/homePage/item.png";

export default function HomePage() {
  return (
    <>
      <div className="home-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 align-img">
              <div className={"img__page"}>
              <img alt="" src={item} />
            </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 wrap__element">
              <div className="flex__element--top">
                <p className="text__headline">
                  WELCOME &nbsp; TO&nbsp; ZOOMX&nbsp; HOTELS
                </p>
                <div className="empty__element"></div>
                <p className="bigs__words--mid">Khách sạn quay ZoomX là gì ?</p>
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
