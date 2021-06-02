import React from "react";
import icon2 from "../../image/zoomX/icon2.png";
import icon3 from "../../image/zoomX/icon3.png";
import icon4 from "../../image/zoomX/icon4.png";
import { useYoungbusiness } from "../../lib/API";
export default function YoungBusiness() {
  const { data } = useYoungbusiness();
  return (
    <>
      {data?.map((item, index) => {
        return (
          <>
            <div className="young-wrapper" key={index}>
              <div className="young-wrapper__label">{item.title}</div>
              <div className="young-wrapper__content">{item.content}</div>
            
              <div className="young-wrapper__image">
                {item.imageYoung?.map((image, idx) => {
                  return (
                    <div className="young-wrapper__image--item" key={idx}>
                      <img src={image.url} alt="#" />
                    </div>
                  );
                })}
            
                {/* <div className="young-wrapper__image--item">
                  <img src={icon2} alt="" />
                </div>
                <div className="young-wrapper__image--item">
                  <img src={icon3} alt="" />
                </div>
                <div className="young-wrapper__image--item">
                  <img src={icon4} alt="" />
                </div> */}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
