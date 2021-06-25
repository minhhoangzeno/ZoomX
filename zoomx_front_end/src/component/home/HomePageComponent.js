import React from "react";
import { useHistory } from "react-router-dom";
import { useDefineHome } from "../../lib/API";

export default function HomePage() {
  const { data } = useDefineHome();
  let history = useHistory();
  return (
    <>
      <div className="home-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 align-img">
              <div className={"img__page"}>
                <img alt="" src={data[0]?.imageCover.url} />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 wrap__element">
              <div className="flex__element--top">
                <p className="text__headlines">
                  WELCOME  TO  ZOOMX HOTELS
                </p>
                <div className="empty__element"></div>
                <p className="bigs__words--mid">{data[0]?.title}</p>
                <p className="title__element">{data[0]?.content}</p>
                <button className="next_element"
                onClick={() => history.push('/zoomx')}
                >XEM THÊM</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
