import React from "react";
import view from "../../image/homePage/view.png";
import view1 from "../../image/homePage/view1.png";
import view2 from "../../image/homePage/view2.png";

export default function News() {
  return (
    <>
      <div className="container-fluid">
        <div className="news__item">
          <p className="text__headline--news">WELCOME TO ZOOMX HOTELS</p>
          <div className="empty__element--news"></div>
          <p className="big__word-news">Tin tức</p>
        </div>
        <div className="row">
          <div className="col-lg-4 news__block">
            <img className="view__item" src={view} alt="#" />
            <div className="news__content">
              <p className="news__date"> Tháng 4 30, 2021</p>
              <p className="view__item">
                Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
              </p>
            </div>
          </div>
          <div className="col-lg-4 news__block">
            <img className="view__item" src={view1} alt="#" />
            <div className="news__content">
              <p className="news__date"> Tháng 4 30, 2021</p>
              <p className="view__item">
                Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
              </p>
            </div>
          </div>
          <div className="col-lg-4 news__block">
            <img className="view__item" src={view2} alt="#" />
            <div className="news__content">
              <p className="news__date"> Tháng 4 30, 2021</p>
              <p className="view__item">
                Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm
              </p>
            </div>
          </div>
          <button className="btn__news">XEM THÊM</button>
        </div>
      </div>
    </>
  );
}
