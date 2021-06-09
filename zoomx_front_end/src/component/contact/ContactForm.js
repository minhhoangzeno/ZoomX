import React, { useState } from "react";
import { doPost } from "../../lib/DataSource";
import hotel from '../../image/contact/hotel.png'
import { useContact } from '../../lib/API';
export default function ContactForm() {
  const [person, setPerson] = useState();
  const [content, setContent] = useState();
  const {data} = useContact()
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

    
      <div className="contact__form">
        <div className="contact__form__title">
          <p>{data?.[0]?.title}</p>
        </div>
        <div className="contact__form__content">
          <p>
          {data?.[0]?.content}
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
        <div className="contact__form__button">
          <button onClick={addPersonContact}>
            <strong>GỬI</strong>
          </button>
          <p>{content}</p>
        </div>
      </div>
    
  );
}

