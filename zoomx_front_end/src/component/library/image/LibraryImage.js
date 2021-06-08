import React, { useState } from "react";
import item from "../../../image/home/librarypage/itemOfList.jpg";
import ModalImage from "./ModalImage";
export default function LibraryImage() {
  return (
    <>
      <div className="list__wrapper">
        <div className="container-fluid">
          <div className="row wrapper__item">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </>
  );
}

function Item() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <ModalImage show={modalShow} onHide={() => setModalShow(false)} />
      <div className="item" onClick={() => setModalShow(true)}>
        <div className="item__content--top">
          <img src={item} alt="" loading="lazy" />
        </div>
        <div className="item__content--bottom">
          <div className="label">
            <span>HÌNH ẢNH</span>
          </div>
          <div className="title">FLC Grand Hotel Quy Nhon 2020</div>
        </div>
      </div>
    </>
  );
}
