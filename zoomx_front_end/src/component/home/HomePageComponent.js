import React from "react";
import item from "../../image/homePage/item.png";
import { useDefineHome } from "../../lib/API";

export default function HomePage() {
  const { data } = useDefineHome();
  return (
    <>
      {data?.map((item, idx) => {
        return (
          <>
            <div className="home-page" key={idx}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 align-img">
                    <div className={"img__page"}>
                      <img alt="" src={item.imageCover.url} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 wrap__element">
                    <div className="flex__element--top">
                      <p className="text__headlines">
                        WELCOME &nbsp; TO &nbsp; ZOOMX&nbsp; HOTELS
                      </p>
                      <div className="empty__element"></div>
                      <p className="bigs__words--mid">
                        {/* Khách sạn quay ZoomX là gì ? */}
                        {item.title}
                      </p>
                      <p className="title__element">
                        {/* Khách sạn quay ZoomX là khách sạn quay đầu tiên và duy
                        nhất tại Việt Nam. Lấy ý tưởng thiết kế khách sạn quay
                        360 độ tạo nên một không gian sang trọng, đẳng cấp, tầm
                        nhìn không giới hạn. */}
                        {item.content}
                      </p>
                      <button className="next_element">XEM THÊM</button>
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
