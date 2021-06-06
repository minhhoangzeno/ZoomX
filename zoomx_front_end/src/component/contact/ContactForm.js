import React, { useState } from "react";
import { doPost } from "../../lib/DataSource";

export default function ContactForm() {
  return (
    <div className="contact__form">
      <div className="contact__form__title">
        <p>Hãy cho chúng tôi biết suy nghĩ của bạn</p>
      </div>
      <div className="contact__form__content">
        <p>
          Khách sạn quay ZoomX là khách sạn quay đầu tiên và duy nhất tại Việt
          Nam. Lấy ý tưởng thiết kế khách sạn quay 360 độ tạo nên một không gian
          sang trọng, đẳng cấp, tầm nhìn không giới hạn. Áp dụng lực đẩy
          Archimedes và hệ thống trục định tâm, dự án sẽ đưa du khách đến những
          trải nghiêm nghỉ dưỡng hoàn toàn mới lạ và khác biệt.
        </p>
      </div>
      <div className="contact__form__main">
        <form action="post">
          <div className="form__main">
            <div className="combo--item">
              <div className="form--item">
                <p>Tên</p>
                <input
                  type="text"
                  name="lastName"
                  onChange={handlePerson}
                  value={person?.lastName}
                />
              </div>
              <div className="form--item">
                <p>Họ</p>
                <input
                  type="text"
                  name="firstName"
                  onChange={handlePerson}
                  value={person?.firstName}
                />
              </div>
            </div>

            <div className="combo--item">
              <div className="form--item">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  onChange={handlePerson}
                  value={person?.email}
                />
              </div>
              <div className="form--item">
                <p>Số điện thoại</p>
                <input
                  type="text"
                  name="numberPhone"
                  onChange={handlePerson}
                  value={person?.numberPhone}
                />
              </div>
            </div>

            <div className="form--mess">
              <p>Tin nhắn</p>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="3"
                value={person?.description}
                onChange={handlePerson}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
