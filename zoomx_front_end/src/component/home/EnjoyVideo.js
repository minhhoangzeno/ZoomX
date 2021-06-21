import React, { useEffect, useState } from "react";
import { ReactVideo } from "reactjs-media";
import { doGet } from "../../lib/DataSource";
import Loading from "../image/Loading";
export default function EnjoyVideo() {
  const [video, setVideo] = useState();
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      let path = "/video";
      try {
        let resp = await doGet(path);
        if (resp.status === 200) {
          setVideo(resp.data)
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchData()
  },[])
  return (
    <>
      <div className="enjoy-video">
        {!loading ?
          <ReactVideo
            src={video?.[0]?.videoUrl}
            poster={video?.[0]?.imageCover?.url}
            primaryColor="red"
          /> : 
          <Loading /> 
      }
      </div>
    </>
  );
}
