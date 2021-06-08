import React from "react";
export default function HeroPage({ title, title_sub, imageBackground }) {
  return (
    <>
      <div className="hero__page" style={{ backgroundImage: `url('${imageBackground}')` }}>
        <div className="container-fluid hero__page__content">
          <div className="hero__page__content--top">{title}</div>
          <div className="hero__page__content--mid">{title_sub}</div>
        </div>
        <div className="hero__page__overlay"></div>
      </div>
    </>
  );
}
