import React from "react";

export default function Category() {
  return (
    <>
      <div className="main__part">
        <div className="main__category">
          <p className="average__word">DANH MỤC</p>
          <div className="box__content">
            <p className="small__content">tin tức</p>
            <p className="small__content">chia sẻ</p>
            <p className="small__content">kỹ năng</p>
          </div>
          <p className="average__word">TÌM KIẾM</p>
          <input className="search__item" type="text" />
          <button className="btn__search">Tìm kiếm</button>
          <p className="average__words">TAGS</p>
          <div className="list__item">
            <p className="content__little">Tin tức</p>
            <p className="content__little">Hotel</p>
            <p className="content__little">Tin tức</p>
            <p className="content__little">Hotel</p>
            <p className="content__little">Tin tức</p>
            <p className="content__little">Hotel</p>
            <p className="content__little">Spa</p>
            <p className="content__little">Tin tức</p>
            <p className="content__little">Hotel</p>
          </div>
        </div>
      </div>
    </>
  );
}
