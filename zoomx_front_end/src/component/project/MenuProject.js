import React from "react";
import iconNav from "../../image/home/librarypage/icon-menu.png";

export default function MenuProject() {
  return (
    <>
      <div className="menu__wrapper">
        <div className="container-fluid">
          <ul className="menu__project">
            <li>
              <img src={iconNav} alt="" />
              <a href="http://www.github.com">KHÁCH SẠN</a>
            </li>
            /
            <li>
              <img src={iconNav} alt="" />
              <a href="http://www.github.com">
                BẤT ĐỘNG SẢN
                <div className="active-cpn"></div>
              </a>
            </li>
            /
            <li>
              <img src={iconNav} alt="" />
              <a href="http://www.github.com">DU LỊCH</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
