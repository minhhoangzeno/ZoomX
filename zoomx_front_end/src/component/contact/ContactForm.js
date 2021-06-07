import React, { useState } from "react";
import { doPost } from "../../lib/DataSource";
import hotel from '../../image/contact/hotel.png'

export default function ContactForm() {
  const [person, setPerson] = useState();
  const [content, setContent] = useState();
  const handlePerson = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  };
  const addPersonContact = async () => {
    const path = "/person-contact";
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const data = new FormData();
    data.append("lastName", person?.lastName);
    data.append("firstName", person?.firstName);
    data.append("email", person?.email);
    data.append("description", person?.description);
    data.append("numberPhone", person?.numberPhone);
    try {
      let resp = await doPost(path, headers, data);
      if (resp.status === 200) {
        setContent("Ban da gui thanh cong!");
        setPerson({});
      }
    } catch (error) {
      console.log(error);
      setContent("Vui long nhap lai");
    }
  };
  return (

    // <div className="col-md-6 col-12">
    //   <div className="contact__form">
    //     <div className="contact__form__title">
    //       <p>Hãy cho chúng tôi biết suy nghĩ của bạn</p>
    //     </div>
    //     <div className="contact__form__content">
    //       <p>
    //         Khách sạn quay ZoomX là khách sạn quay đầu tiên và duy nhất tại Việt
    //         Nam. Lấy ý tưởng thiết kế khách sạn quay 360 độ tạo nên một không
    //         gian sang trọng, đẳng cấp, tầm nhìn không giới hạn. Áp dụng lực đẩy
    //         Archimedes và hệ thống trục định tâm, dự án sẽ đưa du khách đến
    //         những trải nghiêm nghỉ dưỡng hoàn toàn mới lạ và khác biệt.
    //       </p>
    //     </div>
    //     <div className="contact__form__main">
    //       <form action="post">
    //         <div className="form__main">
    //           <div className="combo--item">
    //             <div className="form--item">
    //               <p>Tên</p>
    //               <input
    //                 type="text"
    //                 name="lastName"
    //                 onChange={handlePerson}
    //                 value={person?.lastName}
    //               />
    //             </div>
    //             <div className="form--item">
    //               <p>Họ</p>
    //               <input
    //                 type="text"
    //                 name="firstName"
    //                 onChange={handlePerson}
    //                 value={person?.firstName}
    //               />
    //             </div>
    //           </div>

    //           <div className="combo--item">
    //             <div className="form--item">
    //               <p>Email</p>
    //               <input
    //                 type="email"
    //                 name="email"
    //                 onChange={handlePerson}
    //                 value={person?.email}
    //               />
    //             </div>
    //             <div className="form--item">
    //               <p>Số điện thoại</p>
    //               <input
    //                 type="text"
    //                 name="numberPhone"
    //                 onChange={handlePerson}
    //                 value={person?.numberPhone}
    //               />
    //             </div>
    //           </div>

    //           <div className="form--mess">
    //             <p>Tin nhắn</p>
    //             <textarea
    //               name="description"
    //               id=""
    //               cols="30"
    //               rows="3"
    //               value={person?.description}
    //               onChange={handlePerson}
    //             ></textarea>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //     <div className="contact__form__button">
    //       <button onClick={addPersonContact}>
    //         <strong>GỬI</strong>
    //       </button>
    //       <p>{content}</p>
    //     </div>
    //   </div>
    // </div>


    <div className="contact__info">
      <img src={hotel} alt="" />
      <div className="contact__info--basic">
        <div className="row">
          <div className="col-md-6">
            <p><strong>Địa chỉ: </strong><span>139 Cầu Giấy</span></p>
            <p><strong>Thành phố: </strong><span>Hà Nội</span></p>
          </div>
          <div className="col-md-6">
            <p><strong>Điện thoại: </strong><span>0766 282 838</span></p>
            <p><strong>Email: </strong><span>support@zoomxhotels.com</span></p>
          </div>
        </div>
      </div>
      <div className="contact__info--hotline">
        <span>HOTLINE(8:30 AM-17:30 PM)</span>
        <br />
        <div className="hotline--number"><strong>(+84) 766 262 838</strong></div>
      </div>
    </div>
  );
}


