import React from "react";
import brackets from "../../image/home/a.png";
import { useSlogan } from "../../lib/API";
export default function Founder() {
  const { data } = useSlogan();
  return (
    <>
      <>
        <div className="founder__main">
          <img src={brackets} alt="#" />
          <p className="txt__item--content">{data[0]?.content}</p>
          <p className="founder__item">{data[0]?.author}</p>
          <p className="founder__name">{data[0]?.career}</p>
        </div>
      </>
    </>
  );
}
