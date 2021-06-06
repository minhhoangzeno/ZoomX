import React, { useState } from "react";
import item from "../../image/home/librarypage/itemOfList.jpg";
import ModalLibrary from "./ModalLibrary";

export default function ListLibrary() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="list__wrapper">
        <div className="container-fluid">
          <div className="row wrapper__item">
            <span className="item" onClick={() => setModalShow(true)}>
              <div className="item__content--top">
                <img src={item} alt="" loading="lazy" />
              </div>
              <div className="item__content--bottom">
                <div className="label">
                  <span>HÌNH ẢNH</span>
                </div>
                <div className="title">FLC Grand Hotel Quy Nhon 2020</div>
              </div>
              <ModalLibrary
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </span>
            <span className="item" onClick={() => setModalShow(true)}>
              <div className="item__content--top">
                <img src={item} alt="" loading="lazy" />
              </div>
              <div className="item__content--bottom">
                <div className="label">
                  <span>HÌNH ẢNH</span>
                </div>
                <div className="title">FLC Grand Hotel Quy Nhon 2020</div>
              </div>
              <ModalLibrary
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </span>
            <span className="item" onClick={() => setModalShow(true)}>
              <div className="item__content--top">
                <img src={item} alt="" loading="lazy" />
              </div>
              <div className="item__content--bottom">
                <div className="label">
                  <span>HÌNH ẢNH</span>
                </div>
                <div className="title">FLC Grand Hotel Quy Nhon 2020</div>
              </div>
              <ModalLibrary
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
