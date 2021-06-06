import React from "react";

export default function ContactForm() {
  return (
    <div className="col-md-6 col-12">
      <div className="contact__form">
        <div className="contact__form__title">
          <p>Hãy cho chúng tôi biết suy nghĩ của bạn</p>
        </div>
        <div className="contact__form__content">
          <p>
            Khách sạn quay ZoomX là khách sạn quay đầu tiên và duy nhất tại Việt
            Nam. Lấy ý tưởng thiết kế khách sạn quay 360 độ tạo nên một không
            gian sang trọng, đẳng cấp, tầm nhìn không giới hạn. Áp dụng lực đẩy
            Archimedes và hệ thống trục định tâm, dự án sẽ đưa du khách đến
            những trải nghiêm nghỉ dưỡng hoàn toàn mới lạ và khác biệt.
          </p>
        </div>
        <div className="contact__form__main">
          <form action="post">
            <div className="form__main">
              <div className="combo--item">
                <div className="form--item">
                  <p>Tên</p>
                  <input type="text" name="last_name" />
                </div>
                <div className="form--item">
                  <p>Họ</p>
                  <input type="text" name="first_name" />
                </div>
              </div>

              <div className="combo--item">
                <div className="form--item">
                  <p>Email</p>
                  <input type="email" name="email" />
                </div>
                <div className="form--item">
                  <p>Số điện thoại</p>
                  <input type="text" name="phone" />
                </div>
              </div>

              <div className="form--mess">
                <p>Tin nhắn</p>
                <textarea name="" id="" cols="30" rows="3"></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="contact__form__button">
          <button>
            <strong>GỬI</strong>
          </button>
        </div>
      </div>
    </div>
  );
}
