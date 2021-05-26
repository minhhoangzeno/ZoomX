import React from "react";
// import home from "../../image/home/home.png";
import brackets from "../../image/zoomX/brackets.png";
// import hotel from "../../image/zoomX/hotel.png";
import icon from "../../image/zoomX/icon.png";
import icon1 from "../../image/zoomX/icon1.png";
import icon2 from "../../image/zoomX/icon2.png";
import icon3 from "../../image/zoomX/icon3.png";
import icon4 from "../../image/zoomX/icon4.png";
export default function IntroduceComponent() {
  return (
    <>
      <div className="container-description">
        <div className="img-inner">
          <img src={brackets} className="img-content" alt="#" />
        </div>
        <div className="detail-content">
          <p className="detail-content-block">
            Khách sạn quay ZoomX là khách sạn quay đầu tiên và duy nhất tại Việt
            Nam. Lấy ý tưởng thiết kế khách sạn quay 360 độ tạo nên một không
            gian sang trọng, đẳng cấp, tầm nhìn không giới hạn.
          </p>
          <p className="content-founder">Trịnh Anh Tùng</p>
          <p className="content">Founder</p>
        </div>
        <div className="container-fluid block">
          <div className="row main__cover">
            <div className="col-md-6 item-content">
              <p className="detail-introduce">WELCONE TO ZOOMX HOTELS</p>
              <div className="empty"></div>
              <p className="great-title">Khách sạn quay ZoomX là gì ?</p>
              <p className="title-content">
                Khách sạn quay ZoomX là khách sạn quay đầu tiên và duy nhất tại
                Việt Nam. Lấy ý tưởng thiết kế khách sạn quay 360 độ tạo nên một
                không gian sang trọng, đẳng cấp, tầm nhìn không giới hạn. Áp
                dụng lực đẩy Archimedes và hệ thống trục định tâm, dự án sẽ đưa
                du khách đến những trải nghiệm nghỉ dưỡng hoàn toàn mới lạ và
                khác biệt.
              </p>
              <p className="title-content">
                Chất lượng dịch vụ đảm bảo tiêu chuẩn 4-5*, tiện ích đa dạng,
                khách sạn quay ZoomX hứa hẹn là chốn dừng chân hoàn hảo cho
                khách du lịch trong và ngoài nước.
              </p>
              <p className="title-content">
                Dự án được lên ý tưởng và xây dựng từ chính người Việt, mọi chi
                tiết, thiết kế đều mang đậm dấu ấn văn hóa Việt Nam. Qua đó,
                quảng bá được hình ảnh đất nước, văn hóa, con người Việt Nam ra
                với bạn bè quốc tế.
              </p>
              <div className="flex-item">
                <div className="file__flex--item">
                  <p className="item-file">Hồ sơ năng lực</p>
                </div>
                <button className="item-click">XEM THÊM</button>
              </div>
            </div>
            <div className="col-md-6 item-img">
              <div className="wrap-picture">
                <div
                  className={"picture__img"}
                  style={{ backgroundImage: `url(${icon})` }}
                />
                {/* <img className="picture__img--left" src={icon} alt="#" /> */}
              </div>
            </div>
          </div>
          <div className="container-startup">
            <p className="startup-title">Khởi nghiệp bằng khát vọng tuổi trẻ</p>
            <p className="title-lorem">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
            <div className="row">
              <div className="col-lg-3 col-md-6 container-img">
                <img className="img-startup" src={icon1} alt="#" />
              </div>
              <div className="col-lg-3 col-md-6 container-img">
                <img className="img-startup" src={icon2} alt="#" />
              </div>
              <div className="col-lg-3 col-md-6 container-img">
                <img className="img-startup" src={icon3} alt="#" />
              </div>
              <div className="col-lg-3 col-md-6 container-img">
                <img className="img-startup" src={icon4} alt="#" />
              </div>
            </div>
            <p className="startup-title">Đối tác</p>
          </div>
        </div>
      </div>
    </>
  );
}
