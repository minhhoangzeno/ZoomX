import React from "react";
import hotel from "../../image/homePage/hotel.png";
import play from "../../image/home/play.png";
import videoMp4 from '../../image/video.mp4';
import ReactPlayer from 'react-player';
import { ReactVideo } from "reactjs-media";
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
