import React from "react";
import listItem from "../../image/newPage/listItem.png";

export default function ItemNews() {
  return (
    <>
      <div className="container-fluid main__item__detail">
        <div className="row list__inner">
          <div className="wrapper">
            <div className="block__detail">
              <img className="img__news" src={listItem} alt="#" />
              <div className="ingredient__item">
                <div className="item__wrap">
                  <p className="txt__small">TIPS & TRICK</p>
                  <div className="empty__item"></div>
                  <p className="txt__content">
                    Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
                  </p>
                  <button className="btn__news">Xem thêm</button>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="block__detail">
              <img className="img__news" src={listItem} alt="#" />
              <div className="ingredient__item">
                <div className="item__wrap">
                  <p className="txt__small">TIPS & TRICK</p>
                  <div className="empty__item"></div>
                  <p className="txt__content">
                    Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
                  </p>
                  <button className="btn__news">Xem thêm</button>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="block__detail">
              <img className="img__news" src={listItem} alt="#" />
              <div className="ingredient__item">
                <div className="item__wrap">
                  <p className="txt__small">TIPS & TRICK</p>
                  <div className="empty__item"></div>
                  <p className="txt__content">
                    Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
                  </p>
                  <button className="btn__news">Xem thêm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
