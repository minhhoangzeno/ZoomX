import React, { useState } from "react";
import iconWeather from "../../image/home/icon-weather.png";
import logoCountry from "../../image/home/country.png";
import { useHistory } from "react-router-dom";
import "../../style/style.scss";
import { useIcon } from "../../lib/API";

export default function Footer() {
  const { data } = useIcon();
  const [isNavMobile, setIsNavMobile] = useState(false);
  let history = useHistory();
  return (
    <>
      <footer>
        <div className="footer__wrapper">
          <div className="footer__wrapper--top">
            <div className="container-fluid wrapper__top">
              <div className="row" style={{ flexWrap: "wrap-reverse" }}>
                <div className="col-lg-4 col-md-6 col-6 wrapper__top__item">
                  <div>
                    <div className="wrapper__top__item--top">Thời tiết</div>
                    <div className="wrapper__top__item--mid">
                      HÀ NỘI, VIỆT NAM
                    </div>
                    <div className="wrapper__top__item--bottom">
                      <img src={iconWeather} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6  wrapper__top__item">
                  <div>
                    <div className="wrapper__top__item--top">
                      Liên hệ với chúng tôi
                    </div>
                    <div className="wrapper__top__item--mid">MẠNG XÃ HỘI</div>
                    <div className="wrapper__top__item--bottom">
                      <ul>
                        {data?.map((item, index) => {
                          return (
                            <li key={index}>
                              <a href={item.url}>
                                <img src={item.imageCover.url} alt="#" />
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-9 col-sm-12 wrapper__top__item">
                  <div className="wrapper__top__item--top">Tin mới</div>
                  <div className="wrapper__top__item--mid">
                    ĐĂNG KÝ NHẬN THÔNG BÁO
                  </div>
                  <div className="wrapper__top__item--bottom sign__wrapper">
                    <div className="sign__wrapper__input">
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="sign__wrapper__btn">
                      <button>ĐĂNG KÝ</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="footer__wrapper--bottom">
          <div className="footer__wrapper--bottom__content">
            <div className="container-fluid wrapper__bottom">
              <div className="wrapper__bottom--copy">
                Copyright{" "}
                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M10.08,10.86C10.13,10.53 10.24,10.24 10.38,10C10.5,9.74 10.72,9.53 10.97,9.37C11.21,9.22 11.5,9.15 11.88,9.14C12.11,9.15 12.32,9.19 12.5,9.27C12.71,9.36 12.89,9.5 13.03,9.63C13.17,9.78 13.28,9.96 13.37,10.16C13.46,10.36 13.5,10.58 13.5,10.8H15.3C15.28,10.33 15.19,9.9 15,9.5C14.85,9.12 14.62,8.78 14.32,8.5C14,8.22 13.66,8 13.24,7.84C12.82,7.68 12.36,7.61 11.85,7.61C11.2,7.61 10.63,7.72 10.15,7.95C9.67,8.18 9.27,8.5 8.95,8.87C8.63,9.26 8.39,9.71 8.24,10.23C8.09,10.75 8,11.29 8,11.87V12.14C8,12.72 8.08,13.26 8.23,13.78C8.38,14.3 8.62,14.75 8.94,15.13C9.26,15.5 9.66,15.82 10.14,16.04C10.62,16.26 11.19,16.38 11.84,16.38C12.31,16.38 12.75,16.3 13.16,16.15C13.57,16 13.93,15.79 14.24,15.5C14.55,15.25 14.8,14.94 15,14.58C15.16,14.22 15.27,13.84 15.28,13.43H13.5C13.5,13.64 13.43,13.83 13.34,14C13.25,14.19 13.13,14.34 13,14.47C12.83,14.6 12.66,14.7 12.46,14.77C12.27,14.84 12.07,14.86 11.86,14.87C11.5,14.86 11.2,14.79 10.97,14.64C10.72,14.5 10.5,14.27 10.38,14C10.24,13.77 10.13,13.47 10.08,13.14C10.03,12.81 10,12.47 10,12.14V11.87C10,11.5 10.03,11.19 10.08,10.86M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20Z"
                  />
                </svg>{" "}
                - All Rights Reserved
              </div>
              <ul className="wrapper__bottom--nav">
                <li>
                  <a href="http://www.github.com">Giới thiệu</a>
                </li>
                <li>
                  <a href="http://www.github.com">Điều khoản</a>
                </li>
                <li>
                  <a href="http://www.github.com">Bảo mật</a>
                </li>
                <li>
                  <a href="http://www.github.com">Hỗ trợ</a>
                </li>
                <li>
                  <a href="http://www.github.com">Liên hệ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="header-menu-mobile ">
        <div className="container-fluid header__wrapper">
          <div
            className="header__wrapper--btn"
            onClick={() => setIsNavMobile(true)}
          >
            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
              />
            </svg>
          </div>
          <ul className="header__wrapper--nav">
            <li>
              <a href="http://www.github.com">
                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="http://www.github.com">
                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="http://www.github.com">
                <img src={logoCountry} alt="" />
              </a>
            </li>
            <li>
              <a href="http://www.github.com">
                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={isNavMobile ? "nav--mobile openNavMobile" : "nav--mobile"}
      >
        <ul className="nav--mobile__content">
          <li>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="71.348"
                height="52.437"
                viewBox="0 0 71.348 52.437"
              >
                <g
                  id="Group_540"
                  data-name="Group 540"
                  transform="translate(831.021 147.649)"
                >
                  <g
                    id="Group_532"
                    data-name="Group 532"
                    transform="translate(-828.858 -98.508)"
                  >
                    <path
                      id="Path_241"
                      data-name="Path 241"
                      d="M2046.44,1658.766h.238v2.527h-.238v-.354a.809.809,0,0,1-.729.4.9.9,0,0,1-.661-.274.968.968,0,0,1,0-1.343.9.9,0,0,1,.661-.274.809.809,0,0,1,.729.4Zm-.711,2.339a.689.689,0,0,0,.505-.206.7.7,0,0,0,.206-.509.689.689,0,0,0-.206-.505.715.715,0,0,0-1.011,0,.689.689,0,0,0-.206.505.7.7,0,0,0,.206.509A.689.689,0,0,0,2045.729,1661.105Z"
                      transform="translate(-2044.779 -1658.72)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_242"
                      data-name="Path 242"
                      d="M2079.222,1660.139a.174.174,0,1,1,.245,0A.172.172,0,0,1,2079.222,1660.139Zm0,2.119v-1.805h.238v1.805Z"
                      transform="translate(-2075.623 -1659.684)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_243"
                      data-name="Path 243"
                      d="M2093.808,1658.553c-.35-.029-.52.115-.52.462v.072h.52v.231h-.52v1.574h-.238v-1.574h-.307v-.231h.307v-.072a.633.633,0,0,1,.758-.693Z"
                      transform="translate(-2087.795 -1658.319)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_244"
                      data-name="Path 244"
                      d="M2111.668,1658.553c-.35-.029-.52.115-.52.462v.072h.52v.231h-.52v1.574h-.238v-1.574h-.307v-.231h.307v-.072a.633.633,0,0,1,.758-.693Z"
                      transform="translate(-2103.813 -1658.319)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_245"
                      data-name="Path 245"
                      d="M2135.533,1665.63a.978.978,0,0,1,.249.668c0,.025,0,.065-.007.112h-1.585a.677.677,0,0,0,.719.6.634.634,0,0,0,.581-.307l.209.123a.905.905,0,0,1-.794.415.939.939,0,0,1-.693-.267,1,1,0,0,1,0-1.354.905.905,0,0,1,.678-.271A.806.806,0,0,1,2135.533,1665.63Zm-1.343.549h1.346a.673.673,0,0,0-.22-.444.645.645,0,0,0-.43-.159A.674.674,0,0,0,2134.19,1666.179Z"
                      transform="translate(-2124.746 -1664.62)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_246"
                      data-name="Path 246"
                      d="M2167.288,1665.813a.585.585,0,0,1,.57-.328v.231a.532.532,0,0,0-.57.6v1h-.238v-1.805h.238Z"
                      transform="translate(-2154.437 -1664.746)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_247"
                      data-name="Path 247"
                      d="M2190.2,1665.63a.978.978,0,0,1,.249.668c0,.025,0,.065-.007.112h-1.585a.677.677,0,0,0,.718.6.634.634,0,0,0,.581-.307l.209.123a.905.905,0,0,1-.794.415.938.938,0,0,1-.693-.267,1,1,0,0,1,0-1.354.906.906,0,0,1,.679-.271A.806.806,0,0,1,2190.2,1665.63Zm-1.343.549h1.346a.673.673,0,0,0-.22-.444.647.647,0,0,0-.43-.159A.674.674,0,0,0,2188.853,1666.179Z"
                      transform="translate(-2173.771 -1664.62)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_248"
                      data-name="Path 248"
                      d="M2223.265,1666.085v1.108h-.238v-1.108a.455.455,0,0,0-.491-.509c-.346,0-.585.213-.585.672v.946h-.238v-1.805h.238v.281a.665.665,0,0,1,.606-.325A.674.674,0,0,1,2223.265,1666.085Z"
                      transform="translate(-2203.461 -1664.62)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_249"
                      data-name="Path 249"
                      d="M2252.246,1661.6h-.52v1.094c0,.311.173.285.52.271v.209c-.505.076-.758-.061-.758-.48V1661.6h-.379v-.231h.379v-.433l.238-.072v.505h.52Z"
                      transform="translate(-2229.825 -1660.603)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_250"
                      data-name="Path 250"
                      d="M2297.486,1660.139a.174.174,0,1,1,.245,0A.172.172,0,0,1,2297.486,1660.139Zm0,2.119v-1.805h.238v1.805Z"
                      transform="translate(-2271.372 -1659.684)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_251"
                      data-name="Path 251"
                      d="M2318.347,1666.085v1.108h-.238v-1.108a.455.455,0,0,0-.491-.509c-.347,0-.585.213-.585.672v.946h-.238v-1.805h.238v.281a.666.666,0,0,1,.607-.325A.674.674,0,0,1,2318.347,1666.085Z"
                      transform="translate(-2288.735 -1664.62)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_252"
                      data-name="Path 252"
                      d="M2368.846,1665.63a.977.977,0,0,1,.249.668c0,.025,0,.065-.007.112H2367.5a.677.677,0,0,0,.719.6.633.633,0,0,0,.581-.307l.209.123a.906.906,0,0,1-.794.415.939.939,0,0,1-.693-.267,1,1,0,0,1,0-1.354.905.905,0,0,1,.678-.271A.806.806,0,0,1,2368.846,1665.63Zm-1.343.549h1.347a.673.673,0,0,0-.22-.444.646.646,0,0,0-.43-.159A.674.674,0,0,0,2367.5,1666.179Z"
                      transform="translate(-2333.993 -1664.62)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_253"
                      data-name="Path 253"
                      d="M2399.081,1665.765h.252l-.74,1.8h-.289l-.74-1.8h.253l.632,1.556Z"
                      transform="translate(-2361.173 -1664.997)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_254"
                      data-name="Path 254"
                      d="M2429.669,1665.63a.977.977,0,0,1,.249.668c0,.025,0,.065-.007.112h-1.585a.677.677,0,0,0,.718.6.633.633,0,0,0,.581-.307l.209.123a.905.905,0,0,1-.794.415.939.939,0,0,1-.693-.267,1,1,0,0,1,0-1.354.905.905,0,0,1,.678-.271A.806.806,0,0,1,2429.669,1665.63Zm-1.343.549h1.346a.674.674,0,0,0-.22-.444.645.645,0,0,0-.43-.159A.674.674,0,0,0,2428.327,1666.179Z"
                      transform="translate(-2388.542 -1664.62)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_255"
                      data-name="Path 255"
                      d="M2461.425,1665.813a.585.585,0,0,1,.57-.328v.231a.532.532,0,0,0-.57.6v1h-.238v-1.805h.238Z"
                      transform="translate(-2418.233 -1664.746)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_256"
                      data-name="Path 256"
                      d="M2483.559,1665.765h.252l-.772,1.971a.755.755,0,0,1-.729.556v-.224c.217.025.383-.1.495-.375l.047-.112-.809-1.816h.253l.679,1.512Z"
                      transform="translate(-2436.937 -1664.997)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_257"
                      data-name="Path 257"
                      d="M2533.594,1666.168c.3.076.682.159.682.549a.455.455,0,0,1-.184.375.721.721,0,0,1-.469.144.708.708,0,0,1-.7-.415l.2-.119a.493.493,0,0,0,.495.3c.235,0,.415-.09.415-.289,0-.162-.166-.253-.372-.307-.3-.076-.683-.159-.683-.549a.461.461,0,0,1,.173-.368.679.679,0,0,1,.444-.148.666.666,0,0,1,.632.368l-.2.116a.416.416,0,0,0-.433-.253c-.206,0-.379.1-.379.285C2533.222,1666.024,2533.388,1666.114,2533.594,1666.168Z"
                      transform="translate(-2482.572 -1664.62)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_258"
                      data-name="Path 258"
                      d="M2562.021,1665.63a.976.976,0,0,1,.249.668c0,.025,0,.065-.007.112h-1.585a.677.677,0,0,0,.718.6.634.634,0,0,0,.581-.307l.209.123a.906.906,0,0,1-.794.415.939.939,0,0,1-.693-.267,1,1,0,0,1,0-1.354.906.906,0,0,1,.679-.271A.805.805,0,0,1,2562.021,1665.63Zm-1.343.549h1.346a.674.674,0,0,0-.22-.444.646.646,0,0,0-.429-.159A.674.674,0,0,0,2560.679,1666.179Z"
                      transform="translate(-2507.242 -1664.62)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_259"
                      data-name="Path 259"
                      d="M2592.76,1666.966a.926.926,0,0,1-.271-.675.931.931,0,0,1,.949-.946.843.843,0,0,1,.791.473l-.195.112a.633.633,0,0,0-.6-.354.679.679,0,0,0-.505.209.688.688,0,0,0-.206.506.7.7,0,0,0,.206.509.689.689,0,0,0,.505.206.679.679,0,0,0,.61-.354l.2.115a.9.9,0,0,1-.809.469A.922.922,0,0,1,2592.76,1666.966Z"
                      transform="translate(-2535.991 -1664.62)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_260"
                      data-name="Path 260"
                      d="M2624.374,1667.237a.932.932,0,0,1-.675-.271.915.915,0,0,1-.274-.675.9.9,0,0,1,.274-.672.963.963,0,0,1,1.347,0,.9.9,0,0,1,.278.672.937.937,0,0,1-.949.946Zm0-.231a.689.689,0,0,0,.505-.206.7.7,0,0,0,.206-.509.689.689,0,0,0-.206-.506.715.715,0,0,0-1.011,0,.689.689,0,0,0-.206.506.7.7,0,0,0,.206.509A.689.689,0,0,0,2624.374,1667.006Z"
                      transform="translate(-2563.735 -1664.62)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_261"
                      data-name="Path 261"
                      d="M2658.851,1666.085v1.108h-.238v-1.108a.456.456,0,0,0-.491-.509c-.347,0-.585.213-.585.672v.946h-.238v-1.805h.238v.281a.666.666,0,0,1,.607-.325A.674.674,0,0,1,2658.851,1666.085Z"
                      transform="translate(-2594.115 -1664.62)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_262"
                      data-name="Path 262"
                      d="M2689.056,1658.766h.238v2.527h-.238v-.354a.809.809,0,0,1-.729.4.9.9,0,0,1-.661-.274.968.968,0,0,1,0-1.343.9.9,0,0,1,.661-.274.809.809,0,0,1,.729.4Zm-.711,2.339a.689.689,0,0,0,.505-.206.7.7,0,0,0,.206-.509.689.689,0,0,0-.206-.505.715.715,0,0,0-1.011,0,.689.689,0,0,0-.206.505.7.7,0,0,0,.206.509A.689.689,0,0,0,2688.344,1661.105Z"
                      transform="translate(-2621.107 -1658.72)"
                      fill="#e01042"
                    />
                  </g>
                  <g
                    id="Group_533"
                    data-name="Group 533"
                    transform="translate(-828.726 -105.165)"
                  >
                    <path
                      id="Path_263"
                      data-name="Path 263"
                      d="M2047.748,1596.392v1.17h-.332v-1.151a.441.441,0,0,0-.472-.488c-.331,0-.552.2-.552.629v1.01h-.332v-2.667h.332v1.036a.672.672,0,0,1,.617-.324A.713.713,0,0,1,2047.748,1596.392Z"
                      transform="translate(-2046.06 -1594.78)"
                      fill="#fff"
                    />
                    <path
                      id="Path_264"
                      data-name="Path 264"
                      d="M2074.715,1603.807a1,1,0,1,1,.713-.29A.973.973,0,0,1,2074.715,1603.807Zm.48-.518a.678.678,0,0,0-.48-1.162.678.678,0,1,0,.48,1.162Z"
                      transform="translate(-2070.86 -1600.976)"
                      fill="#fff"
                    />
                    <path
                      id="Path_265"
                      data-name="Path 265"
                      d="M2103.911,1597.964h-.507V1599c0,.293.168.271.507.255v.3c-.579.076-.838-.08-.838-.552v-1.033h-.377v-.32h.377v-.434l.332-.1v.534h.507Z"
                      transform="translate(-2096.854 -1596.767)"
                      fill="#fff"
                    />
                    <path
                      id="Path_266"
                      data-name="Path 266"
                      d="M2125.557,1602.958a.65.65,0,0,0,.69.537.593.593,0,0,0,.548-.278l.282.16a.935.935,0,0,1-.838.43,1.015,1.015,0,0,1-.739-.282,1.061,1.061,0,0,1,0-1.437.965.965,0,0,1,.72-.286.871.871,0,0,1,.682.3,1.061,1.061,0,0,1,.255.857Zm0-.29h1.272a.6.6,0,0,0-.614-.553A.634.634,0,0,0,2125.557,1602.668Z"
                      transform="translate(-2117.052 -1600.976)"
                      fill="#fff"
                    />
                    <path
                      id="Path_267"
                      data-name="Path 267"
                      d="M2155.642,1596.567v-2.782h.332v2.782Z"
                      transform="translate(-2144.338 -1593.785)"
                      fill="#fff"
                    />
                    <path
                      id="Path_268"
                      data-name="Path 268"
                      d="M2171.226,1602.653c.3.065.694.175.69.583a.5.5,0,0,1-.2.415.807.807,0,0,1-.51.156.773.773,0,0,1-.758-.446l.286-.164a.466.466,0,0,0,.472.3c.217,0,.377-.08.377-.259,0-.149-.168-.232-.377-.282-.3-.08-.69-.179-.69-.583a.516.516,0,0,1,.19-.408.8.8,0,0,1,1.17.236l-.278.156a.4.4,0,0,0-.408-.244c-.187,0-.339.091-.339.255C2170.849,1602.516,2171.017,1602.6,2171.226,1602.653Z"
                      transform="translate(-2157.614 -1600.976)"
                      fill="#fff"
                    />
                  </g>
                  <g
                    id="Group_535"
                    data-name="Group 535"
                    transform="translate(-829.82 -138.66)"
                  >
                    <path
                      id="Path_269"
                      data-name="Path 269"
                      d="M2065.807,1269.083h-30.361l14.65,15Z"
                      transform="translate(-2035.446 -1269.083)"
                      fill="#fff"
                    />
                    <g
                      id="Group_534"
                      data-name="Group 534"
                      transform="translate(15.673)"
                    >
                      <path
                        id="Path_270"
                        data-name="Path 270"
                        d="M2408.808,1500.281h30.433l-14.685-15.033Z"
                        transform="translate(-2385.967 -1462.95)"
                        fill="#fff"
                      />
                      <path
                        id="Path_271"
                        data-name="Path 271"
                        d="M2224.946,1290.335l-20.76-21.252-16.806,16.044,20.76,21.252Z"
                        transform="translate(-2187.38 -1269.083)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_536"
                    data-name="Group 536"
                    transform="translate(-797.342 -143.463)"
                  >
                    <path
                      id="Path_272"
                      data-name="Path 272"
                      d="M2563.9,1462.778l-2.428,2.318,14.685,15.033v-4.8Z"
                      transform="translate(-2539.686 -1437.995)"
                      fill="#999"
                    />
                    <path
                      id="Path_273"
                      data-name="Path 273"
                      d="M2353.994,1226.294h-2.471v-2.529l-1.219-1.247v4.8l20.76,21.252,2.428-2.318Z"
                      transform="translate(-2350.304 -1222.518)"
                      fill="#999"
                    />
                  </g>
                  <path
                    id="Path_274"
                    data-name="Path 274"
                    d="M2061.473,1301.189H2023.8l33.679-32.107h37.668Z"
                    transform="translate(-2854.826 -1407.742)"
                    fill="#e01042"
                  />
                  <rect
                    id="Rectangle_292"
                    data-name="Rectangle 292"
                    width="37.619"
                    height="5.225"
                    transform="translate(-831.021 -106.553)"
                    fill="#59595b"
                  />
                  <path
                    id="Path_275"
                    data-name="Path 275"
                    d="M2422.225,1273.49l-33.729,32.191v-5.225l33.729-32.191Z"
                    transform="translate(-3181.898 -1407.01)"
                    fill="#bfbfc1"
                  />
                  <path
                    id="Path_276"
                    data-name="Path 276"
                    d="M2368.937,1189.517h3.514v1.475h-5.64v-1.041l3.384-4.715h-3.24v-1.475h5.351v1.041Z"
                    transform="translate(-3162.45 -1331.222)"
                    fill="#fff"
                  />
                  <path
                    id="Path_277"
                    data-name="Path 277"
                    d="M2622.371,1184.874v4.483h-1.562v-4.382c0-1-.535-1.576-1.4-1.576-.969,0-1.576.636-1.576,1.909v4.049h-1.562v-4.382c0-1-.492-1.576-1.36-1.576-.94,0-1.605.651-1.605,1.909v4.049h-1.562v-7.231h1.562v.868a2.309,2.309,0,0,1,2.068-1.056,2.21,2.21,0,0,1,2.054,1.143,2.417,2.417,0,0,1,2.212-1.143A2.669,2.669,0,0,1,2622.371,1184.874Z"
                    transform="translate(-3382.115 -1329.587)"
                    fill="#fff"
                  />
                  <g
                    id="Group_537"
                    data-name="Group 537"
                    transform="translate(-788.588 -147.649)"
                  >
                    <path
                      id="Path_278"
                      data-name="Path 278"
                      d="M2436.768,1185a2.149,2.149,0,0,1,.543-.892,2.305,2.305,0,0,1,3.21,0,2.152,2.152,0,0,1,.543.892h1.6a3.825,3.825,0,0,0-7.5,0Z"
                      transform="translate(-2435.164 -1181.938)"
                      fill="#fff"
                    />
                    <path
                      id="Path_279"
                      data-name="Path 279"
                      d="M2441.064,1226a2.152,2.152,0,0,1-.543.892,2.305,2.305,0,0,1-3.21,0,2.15,2.15,0,0,1-.543-.892h-1.6a3.648,3.648,0,0,0,1.048,1.963,3.825,3.825,0,0,0,6.457-1.963Z"
                      transform="translate(-2435.164 -1221.457)"
                      fill="#fff"
                    />
                  </g>
                  <g
                    id="Group_538"
                    data-name="Group 538"
                    transform="translate(-779.651 -147.585)"
                  >
                    <path
                      id="Path_280"
                      data-name="Path 280"
                      d="M2565.375,1184.122a2.224,2.224,0,0,1,1.406,1.43h1.6a3.649,3.649,0,0,0-1.048-1.963,3.6,3.6,0,0,0-1.963-1.036Z"
                      transform="translate(-2560.881 -1182.554)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_281"
                      data-name="Path 281"
                      d="M2523.411,1185.56a2.225,2.225,0,0,1,1.406-1.43v-1.568a3.788,3.788,0,0,0-3.01,3Z"
                      transform="translate(-2521.807 -1182.562)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_282"
                      data-name="Path 282"
                      d="M2524.817,1227.432a2.225,2.225,0,0,1-1.406-1.43h-1.6a3.788,3.788,0,0,0,3.01,3Z"
                      transform="translate(-2521.807 -1221.52)"
                      fill="#e01042"
                    />
                    <path
                      id="Path_283"
                      data-name="Path 283"
                      d="M2566.781,1226a2.224,2.224,0,0,1-1.406,1.43V1229a3.6,3.6,0,0,0,1.963-1.036,3.65,3.65,0,0,0,1.048-1.963Z"
                      transform="translate(-2560.881 -1221.52)"
                      fill="#e01042"
                    />
                  </g>
                  <g
                    id="Group_539"
                    data-name="Group 539"
                    transform="translate(-829.061 -105.107)"
                  >
                    <path
                      id="Path_284"
                      data-name="Path 284"
                      d="M2044.449,1596.823v1.108h-.39v-1.069a.376.376,0,0,0-.4-.419c-.274,0-.458.17-.458.52v.968h-.39V1595.4h.39v.953a.617.617,0,0,1,.56-.278A.672.672,0,0,1,2044.449,1596.823Z"
                      transform="translate(-2042.806 -1595.296)"
                      fill="#fff"
                    />
                    <path
                      id="Path_285"
                      data-name="Path 285"
                      d="M2073.705,1603.573a.968.968,0,1,1,.675.274A.917.917,0,0,1,2073.705,1603.573Zm.675-.1a.545.545,0,0,0,.4-.162.593.593,0,0,0,0-.816.576.576,0,0,0-.8,0,.594.594,0,0,0,0,.816A.545.545,0,0,0,2074.38,1603.469Z"
                      transform="translate(-2070.268 -1601.166)"
                      fill="#fff"
                    />
                    <path
                      id="Path_286"
                      data-name="Path 286"
                      d="M2106.2,1598.385h-.448v.866c0,.231.152.227.448.213v.35c-.6.072-.838-.09-.838-.563v-.866h-.332v-.375h.332v-.39l.39-.115v.505h.448Z"
                      transform="translate(-2098.61 -1597.179)"
                      fill="#fff"
                    />
                    <path
                      id="Path_287"
                      data-name="Path 287"
                      d="M2131.017,1603.064a.6.6,0,0,0,1.043.2l.321.188a.887.887,0,0,1-.791.394.977.977,0,0,1-.711-.267.991.991,0,0,1,0-1.357.911.911,0,0,1,.686-.274.846.846,0,0,1,.65.278.966.966,0,0,1,.256.675,1.039,1.039,0,0,1-.014.162Zm1.058-.318a.5.5,0,0,0-.516-.444.524.524,0,0,0-.545.444Z"
                      transform="translate(-2121.552 -1601.166)"
                      fill="#fff"
                    />
                    <path
                      id="Path_288"
                      data-name="Path 288"
                      d="M2163.574,1596.99v-2.635h.39v2.635Z"
                      transform="translate(-2151.116 -1594.355)"
                      fill="#fff"
                    />
                    <path
                      id="Path_289"
                      data-name="Path 289"
                      d="M2182.895,1602.729c.278.061.639.177.632.563a.48.48,0,0,1-.2.408.829.829,0,0,1-.5.148.751.751,0,0,1-.736-.422l.336-.195a.381.381,0,0,0,.4.26c.206,0,.307-.069.307-.2,0-.116-.152-.184-.343-.231-.271-.069-.635-.177-.628-.556a.486.486,0,0,1,.188-.4.793.793,0,0,1,1.141.224l-.329.184a.341.341,0,0,0-.339-.206c-.148,0-.264.065-.264.191S2182.707,1602.675,2182.895,1602.729Z"
                      transform="translate(-2167.719 -1601.166)"
                      fill="#fff"
                    />
                  </g>
                  <rect
                    id="Rectangle_293"
                    data-name="Rectangle 293"
                    width="30.36"
                    height="4.803"
                    transform="translate(-829.82 -143.463)"
                    fill="#e01042"
                  />
                </g>
              </svg>
            </span>
          </li>
          <li>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              Trang chủ
            </span>
          </li>
          <li>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/zoomx")}
            >
              Giới thiệu
            </span>
          </li>
          <li>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/project")}
            >
              Dự án
            </span>
          </li>
          <li>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/investment")}
            >
              Lĩnh vực đầu tư
            </span>
          </li>
          <li>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/news")}
            >
              Tin tức - Sự kiện
            </span>
          </li>
          <li>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/library")}
            >
              Thư viện
            </span>
          </li>
          <li>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/contact")}
            >
              Liên hệ
            </span>
          </li>
          <li>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/recruitment")}
            >
              Tuyển dụng
            </span>
          </li>
        </ul>
        <div
          className="nav--mobile__close"
          onClick={() => setIsNavMobile(false)}
        >
          <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
