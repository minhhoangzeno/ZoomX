import React from "react";
import hotel from "../../image/contact/hotel.png";
export default function ContactInfo() {
  return (
    <div className="col-md-6 col-12">
      <div className="contact__info">
        <img src={hotel} alt="" />
        <div className="contact__info--basic">
          <div className="row">
            <div className="col-6">
              <p>
                <strong>Địa chỉ: </strong>
                <span>139 Cầu Giấy</span>
              </p>
              <p>
                <strong>Thành phố: </strong>
                <span>Hà Nội</span>
              </p>
            </div>
            <div className="col-6">
              <p>
                <strong>Điện thoại: </strong>
                <span>0766 282 838</span>
              </p>
              <p>
                <strong>Email: </strong>
                <span>support@zoomxhotels.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="contact__info--hotline">
          <span>HOTLINE(8:30 AM-17:30 PM)</span>
          <br />
          <div className="hotline--number">
            <strong>(+84) 766 262 838</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
