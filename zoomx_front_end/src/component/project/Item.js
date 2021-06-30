import React from "react";
import { useHistory } from "react-router-dom";
export default function Item({ data }) {
  let history = useHistory();
  return (
    <>
      <div
        className="item item-left"
        onClick={() => {
          history.push({
            pathname: "/detail-project",
            state: data._id,
          });
        }}
      >
        <div className="item__content--top">
          <div className="wrapper-img">
            <img src={data?.imageInfor?.url} alt="" />
          </div>
        </div>
        <div className="item__content--bottom">
          <div className="item__bottom--wrapper">
            <h6 className="title">{data?.projectName}</h6>
            <div className="label">
              <span>XEM THÊM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
