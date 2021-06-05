import React from "react";
import hotel from "../../image/zoomX/hotel.png";
export default function IntroduceComponent() {
  return (
    <>
      <div className="introduce">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6" style={{paddingLeft:0}}>
              <div className="introduce-detail">
                <p className="introduce-detail__title">WELCOME &nbsp; TO &nbsp; ZOOMX &nbsp; HOTELS</p>
                <div className="introduce-detail__empty"></div>
                <p className="introduce-detail__label">Khách sạn quay ZoomX là gì ?</p>
                <div className="introduce-detail__content">
                  <p>
                    Khách sạn quay ZoomX là khách sạn quay đầu tiên và duy nhất tại Việt Nam.
                    Lấy ý tưởng thiết kế khách sạn quay 360 độ tạo nên một không gian sang trọng,
                    đẳng cấp, tầm nhìn không giới hạn. Áp dụng lực đẩy Archimedes và hệ thống trục định tâm,
                    dự án sẽ đưa du khách đến những trải nghiệm nghỉ dưỡng hoàn toàn mới lạ và khác biệt.
                </p>
                  <p>
                    Chất lượng dịch vụ đảm bảo tiêu chuẩn 4-5*, tiện ích đa dạng,
                    khách sạn quay ZoomX hứa hẹn là chốn dừng chân hoàn hảo cho khách du lịch trong và ngoài nước.
                  </p>
                  <p>
                    Dự án được lên ý tưởng và xây dựng từ chính người Việt, mọi chi tiết, thiết kế đều mang đậm dấu ấn văn hóa Việt Nam.
                    Qua đó, quảng bá được hình ảnh đất nước, văn hóa, con người Việt Nam ra với bạn bè quốc tế.
                </p>
                </div>
                <div className="introduce-detail__profile">
                  <div className="introduce-detail__profile--text">
                    Hồ sơ năng lực
                  </div>
                  <div className="introduce-detail__profile--btn">
                    <button>TẢI XUỐNG</button>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-12 col-sm-12 col-md-6 introduce-image">
              <img src={hotel} alt="" />

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

