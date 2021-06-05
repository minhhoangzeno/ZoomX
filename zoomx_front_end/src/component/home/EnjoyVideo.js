import React from "react";
import { ReactVideo } from "reactjs-media";
import hotel from "../../image/homePage/hotel.png";
import videoMp4 from "../../image/video.mp4";
export default function EnjoyVideo() {
  return (
    <>
      <div className="enjoy-video">
        <ReactVideo
          src={videoMp4}
          poster={hotel}
          primaryColor="red"
          // other props
        />
      </div>
    </>
  );
}
