import React from "react";

export default function Category() {
  return (
    <>
      <div className="main__part">
        <div className="main__category">
          <p className="average__word">DANH MỤC</p>
          <div className="box__content">
            <p className="small__content">Tin tức</p>
            <p className="small__content">Chia sẻ</p>
            <p className="small__content">Kỹ năng</p>
          </div>
          <p className="average__word">TÌM KIẾM</p>
          <input className="search__item" type="text" />
          <button className="btn__search">TÌM KIẾM</button>
        </div>
      </div>
    </>
  );
}
