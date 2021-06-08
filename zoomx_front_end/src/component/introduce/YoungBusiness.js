import React from "react";
import icon2 from "../../image/zoomX/icon2.png";
import icon3 from "../../image/zoomX/icon3.png";
import icon4 from "../../image/zoomX/icon4.png";
import { useYoungbusiness } from "../../lib/API";
export default function YoungBusiness() {
  const { data } = useYoungbusiness();
  return (
    <>
      <div className="young-wrapper">
        <div className="young-wrapper__label">{data[0]?.title}</div>
        <div
          className="young-wrapper__content"
          dangerouslySetInnerHTML={{ __html: data[0]?.content }}
        ></div>
        <div className="young-wrapper__image">
          <div className="young-wrapper__image--item">
            <img src={icon2} alt="" />
          </div>
          <div className="young-wrapper__image--item">
            <img src={icon2} alt="" />
          </div>
          <div className="young-wrapper__image--item">
            <img src={icon3} alt="" />
          </div>
          <div className="young-wrapper__image--item">
            <img src={icon4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
