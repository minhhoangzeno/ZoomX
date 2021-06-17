import React from "react";

export default function item({ data }) {
  return (
    <>
      <div className="col-xl-12 wrappers">
        <div className="block__detail">
          <img className="img__news" src={data?.imageInfor?.url} alt="#" />
          <div className="ingredient__item">
            <div className="item__wrap">
              <p className="txt__small">TIPS & TRICK</p>
              <div className="empty__item"></div>
              <p className="txt__content">{data?.title}</p>
              <button className="btn__news">XEM THÊM</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
