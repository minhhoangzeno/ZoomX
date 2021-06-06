import React from "react";
import item from "../../image/home/librarypage/itemOfList.jpg";

export default function ListProject() {
  return (
    <>
      <div className="list__wrapper-project">
        <div className="container-fluid">
          <div className="row wrapper__item">
            <a href="http://www.github.com" className="item item-left">
              <div className="item__content--top">
                <div className="wrapper-img">
                  <img src={item} alt="" />
                </div>
              </div>
              <div className="item__content--bottom">
                <h6 className="title">FLC Grand Hotel Quy Nhon 2020</h6>
                <div className="label">
                  <span>XEM THÊM</span>
                </div>
              </div>
            </a>
            <a href="http://www.github.com" className="item item-right">
              <div className="item__content--top">
                <div className="wrapper-img">
                  <img src={item} alt="" />
                </div>
              </div>
              <div className="item__content--bottom">
                <div className="title">FLC Grand Hotel Quy Nhon 2020</div>
                <div className="label">
                  <span>XEM THÊM</span>
                </div>
              </div>
            </a>
          </div>
          <div className="row wrapper__item">
            <a href="http://www.github.com" className="item item-left">
              <div className="item__content--top">
                <div className="wrapper-img">
                  <img src={item} alt="" />
                </div>
              </div>
              <div className="item__content--bottom">
                <div className="title">FLC Grand Hotel Quy Nhon 2020</div>
                <div className="label">
                  <span>XEM THÊM</span>
                </div>
              </div>
            </a>
            <a href="http://www.github.com" className="item item-right">
              <div className="item__content--top">
                <div className="wrapper-img">
                  <img src={item} alt="" />
                </div>
              </div>
              <div className="item__content--bottom">
                <div className="title">FLC Grand Hotel Quy Nhon 2020</div>
                <div className="label">
                  <span>XEM THÊM</span>
                </div>
              </div>
            </a>
          </div>
          <div className="row wrapper__item">
            <a href="http://www.github.com" className="item item-left">
              <div className="item__content--top">
                <div className="wrapper-img">
                  <img src={item} alt="" />
                </div>
              </div>
              <div className="item__content--bottom">
                <div className="title">FLC Grand Hotel Quy Nhon 2020</div>
                <div className="label">
                  <span>XEM THÊM</span>
                </div>
              </div>
            </a>
            <a href="http://www.github.com" className="item item-right">
              <div className="item__content--top">
                <div className="wrapper-img">
                  <img src={item} alt="" />
                </div>
              </div>
              <div className="item__content--bottom">
                <div className="title">FLC Grand Hotel Quy Nhon 2020</div>
                <div className="label">
                  <span>XEM THÊM</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
