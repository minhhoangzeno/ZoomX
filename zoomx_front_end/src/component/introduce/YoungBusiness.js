import React from "react";
import { useYoungbusiness } from "../../lib/API";
export default function YoungBusiness() {
  const { data } = useYoungbusiness();
  return (
    <>
      {data?.map((item, index) => {
        return (
          <>
            <div className="young-wrapper" key={index}>
              <div className="young-wrapper__label">{item.title}</div>
              <div className="young-wrapper__content">{item.content}</div>

              <div className="young-wrapper__image">
                {item.imageYoung?.map((image, idx) => {
                  return (
                    <div className="young-wrapper__image--item" key={idx}>
                      <img src={image.url} alt="#" />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
