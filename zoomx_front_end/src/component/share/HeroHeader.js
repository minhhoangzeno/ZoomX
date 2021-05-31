import React from "react";
import { useHistory } from "react-router";
import { useHero } from "../../lib/API";
import "../../style/style.scss";
export default function HeroHeader() {
  const history = useHistory();
  const { data } = useHero();
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div className="hero" key={index}>
            <div className="container-fluid hero__content">
              <div className="hero__content--top">
                {/* WELCOME &nbsp; TO&nbsp; ZOOMX&nbsp; HOTELS
                 */}
                {item.title}
              </div>
              <div className="hero__empty"></div>
              <div className="hero__content--mid">
                {/* Difference in every second */}
                {item.label}
              </div>
              <div className="hero__content--bottom">
                <button onClick={() => history.push("/zoomx")}>XEM THÊM</button>
              </div>
            </div>
            <div className="hero__overlay"></div>
          </div>
        );
      })}
    </>
  );
}
