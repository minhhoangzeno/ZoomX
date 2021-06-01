import React from "react";
import brackets from "../../image/home/a.png";
import { useSlogan } from "../../lib/API";
export default function Founder() {
  const { data } = useSlogan();
  return (
    <>
      {data?.map((item, index) => {
        return (
          <>
            <div className="founder__main" key={index}>
              <img src={brackets} alt="#" />
              <p className="txt__item--content">{item.content}</p>
              <p className="founder__item">{item.author}</p>
              <p className="founder__name">{item.career}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
