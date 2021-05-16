import React from "react";
import item from "../../../../image/home/librarypage/itemOfList.jpg";
import ModalProject from "./ModalProject";
export default function ProjectItem() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="col-4 main">
        <button onClick={() => setModalShow(true)}>Sửa</button>
        <button>Xóa</button>
        <div className="item__content--top">
          <img className="img__admin" src={item} alt="" />
          <div className="title">FLC Grand Hotel Quy Nhon 2020</div>
        </div>
      </div>
      <ModalProject show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
