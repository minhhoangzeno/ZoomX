import React, { useState } from "react";
import item from "../../../image/home/librarypage/itemOfList.jpg";
import ModalLookup from "./ModalLookup";

export default function LibraryLookup() {
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
      <ModalLookup show={modalShow} onHide={() => setModalShow(false)} />
      <div className="item" onClick={() => setModalShow(true)}>
        <div className="item__content--top">
          <img src={item} alt="" loading="lazy" />
        </div>
        <div className="item__content--bottom">
          <div className="label">
            <span>VIDEO</span>
          </div>
          <div className="title">FLC Grand Hotel Quy Nhon 2020</div>
        </div>
      </div>
    </>
  );
}
