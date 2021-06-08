// import React from "react";
import React from "react";
import Slider from "react-slick";
import itemHome from "../../image/homePage/itemHome.png";
import IconHome from "./IconHome";
export default function ItemHome() {
  const settings = {
    infinite: true,
    speed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container__item-block">
      <p className="text__headline-block">
        WELCOME &nbsp; TO &nbsp; ZOOMX&nbsp; HOTELS
      </p>
      <div className="empty__element-block"></div>
      <p className="big__word-block">Tại sao chọn ZoomX Hotels ?</p>
      <div className="item__element">
        <Slider className="main__details" {...settings}>
          <div className="item__element">
            <div className="page__overlay"></div>
            <img className="img__page-blocks" src={itemHome} alt="#" />
            <div className="content__element-block">
              <p className="txt__headline">Kích thích mọi giác quan</p>
              <div className="flex__item">
                <IconHome />
                <p className="txt__item">
                  Mở rộng tầm mắt ngắm nhìn không gian không giới hạn nhờ thiết
                  kế quay 360 độ
                </p>
              </div>
              <div className="flex__item">
                <IconHome />
                <p className="txt__item">
                  Chìm đắm vào những bản nhạc du dương
                </p>
              </div>
              <div className="flex__item">
                <IconHome />
                <p className="txt__item">
                  Thư giãn cùng những hương thơm đặc trưng
                </p>
              </div>
              <div className="flex__item">
                <IconHome />
                <p className="txt__item">
                  Kích thích vị giác với nhiều món ăn độc đáo đến từ khắp nơi
                  trên thế giới.
                </p>
              </div>
            </div>
          </div>
          <div className="item__element">
            <img className="img__page-blocks" src={itemHome} alt="#" />
            <div className="page__overlay"></div>
            <div className="content__element-block">
              <p className="txt__headline">Kích thích mọi giác quan</p>
              <div className="flex__item">
                <IconHome />
                <p className="txt__item">
                  Mở rộng tầm mắt ngắm nhìn không gian không giới hạn nhờ thiết
                  kế quay 360 độ
                </p>
              </div>
              <div className="flex__item">
                <IconHome />
                <p className="txt__item">
                  Chìm đắm vào những bản nhạc du dương
                </p>
              </div>
              <div className="flex__item">
                <IconHome />
                <p className="txt__item">
                  Thư giãn cùng những hương thơm đặc trưng
                </p>
              </div>
              <div className="flex__item">
                <IconHome />
                <p className="txt__item">
                  Kích thích vị giác với nhiều món ăn độc đáo đến từ khắp nơi
                  trên thế giới.
                </p>
              </div>
            </div>
          </div>
          <div className="item__element">
            <img className="img__page-blocks" src={itemHome} alt="#" />
            <div className="page__overlay"></div>
            <div className="content__element-block">
              <p className="txt__headline">Kích thích mọi giác quan</p>
              <div className="flex__item">
                <IconHome />
                <p className="txt__item">
                  Mở rộng tầm mắt ngắm nhìn không gian không giới hạn nhờ thiết
                  kế quay 360 độ
                </p>
              </div>
              <div className="flex__item">
                <IconHome />
                <p className="txt__item">
                  Chìm đắm vào những bản nhạc du dương
                </p>
              </div>
              <div className="flex__item">
                <IconHome />
                <p className="txt__item">
                  Thư giãn cùng những hương thơm đặc trưng
                </p>
              </div>
              <div className="flex__item">
                <IconHome />
                <p className="txt__item">
                  Kích thích vị giác với nhiều món ăn độc đáo đến từ khắp nơi
                  trên thế giới.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
