import React, { dataReasonSelect } from "react";
import hotel from "../../image/zoomX/hotel.png";
import { useZoomx } from "../../lib/API";
export default function IntroduceComponent() {
  const { data } = useZoomx();
  return (
    <>
      <div className="introduce">
        <div className="container-fluid">
          <div className="row" style={{ flexWrap: "wrap-reverse" }}>
            <div
              className="col-12 col-sm-12 col-xs-12 col-md-6"
              style={{ paddingLeft: 0 }}
            >
              <div className="introduce-detail">
                <p className="introduce-detail__title">
                  WELCOME &nbsp; TO &nbsp; ZOOMX &nbsp; HOTELS
                </p>
                <div className="introduce-detail__empty"></div>
                <p className="introduce-detail__label">
                  Khách sạn quay ZoomX là gì ?
                </p>
                <div className="introduce-detail__content">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data[0]?.content,
                    }}
                  ></p>
                </div>
                <div className="introduce-detail__profile">
                  <div className="introduce-detail__profile--text">
                    Hồ sơ năng lực
                  </div>
                  <div className="introduce-detail__profile--btn">
                    <button>TẢI XUỐNG</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-xs-12 col-md-6 introduce-image">
              <img src={data[0]?.imageCover.url} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
