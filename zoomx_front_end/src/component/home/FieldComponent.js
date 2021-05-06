import React from "react";
import icon1 from "../../image/homePage/icon1.png";
import icon2 from "../../image/homePage/icon2.png";
import icon3 from "../../image/homePage/icon3.png";
import icon4 from "../../image/homePage/icon4.png";
export default function FieldComponent() {
  return (
    <>
      <div className="container-fluid main">
        <div className="field__main">
          <p className="text__headline-txt">WELCOME TO ZOOMX HOTELS</p>
          <div className="empty__element-txt"></div>
          <p className="big__word-txt">Lĩnh vực đầu tư</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="element__field">
              <img className="img__field" src={icon1} alt="#" />
              <div className="wrapper__item">
                <p className="content__item">01</p>
                <p className="content__txt">Lĩnh vực</p>
                <p className="detail__hotel">KHÁCH SẠN</p>
                <div className="empty__field"></div>
                <button className="btn__item">Xem thêm</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="element__field">
              <img className="img__field" src={icon2} alt="#" />
              <div className="wrapper__item">
                <p className="content__item">02</p>
                <p className="content__txt">Lĩnh vực</p>
                <p className="detail__hotel">KHÁCH SẠN</p>
                <div className="empty__field"></div>
                <button className="btn__item">Xem thêm</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="element__field">
              <img className="img__field" src={icon3} alt="#" />
              <div className="wrapper__item">
                <p className="content__item">03</p>
                <p className="content__txt">Lĩnh vực</p>
                <p className="detail__hotel">KHÁCH SẠN</p>
                <div className="empty__field"></div>
                <button className="btn__item">Xem thêm</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="element__field">
              <img className="img__field" src={icon4} alt="#" />
              <div className="wrapper__item">
                <p className="content__item">04</p>
                <p className="content__txt">Lĩnh vực</p>
                <p className="detail__hotel">KHÁCH SẠN</p>
                <div className="empty__field"></div>
                <button className="btn__item">Xem thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
