import React from "react";
import { useHistory } from "react-router";
import listItem from "../../image/newPage/listItem.png";

export default function ItemNews({ data }) {
  let history = useHistory();
  return (
    <>

      <div className="col-xl-6 col-lg-6 col-md-6 col-12 wrappers" onClick={() => history.push('/blog-detail')}>
        <div className="block__detail">
          <img className="img__news" src={listItem} alt="#" />
          <div className="ingredient__item">
            <div className="item__wrap">
              <p className="txt__small">TIPS & TRICK</p>
              <div className="empty__item"></div>
              <p className="txt__content">
                {data?.title}
              </p>
              <button className="btn__news">XEM THÊM</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
