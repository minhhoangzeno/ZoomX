import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { doGet } from "../../lib/DataSource";
import Loading from "../image/Loading";
export default function News() {
  const [data, setData] = useState();
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      let path = "/blog-sort";
      try {
        let resp = await doGet(path);
        if (resp.status === 200) {
          setData(resp.data);
          setLoading(false)
        }
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    fetchData();
  }, []);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  return (
    <div className="main__view--slider">
      <p className="text__headline--view">
        WELCOME &nbsp; TO &nbsp; ZOOMX&nbsp; HOTELS
      </p>
      <div className="empty__element-view"></div>
      <p className="big__word-view">Tin tức</p>
      {!loading ?
        <Slider className="main__slider" {...settings}>
          {data?.map((item, index) => {
            return (
              <div key={index}>
                <div className="block__details">
                  <img
                    className="img__news"
                    src={item?.imageInfor?.url}
                    alt="#"
                  />
                  <div className="ingredient__item">
                    <div className="item__wrap">
                      <p className="txt__small">TIPS & TRICK</p>
                      <div className="empty__item"></div>
                      <p className="txt__contents">{item?.title}</p>
                      <button
                        className="btn__news"
                        onClick={() => {
                          history.push({
                            pathname: "/blog-detail",
                            state: item,
                          });
                        }}
                      >
                        XEM THÊM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        :
        <Loading />
      }
      <div className="btn__item-click">
        <button onClick={() => {
          history.push('/news')
        }}>XEM THÊM</button>
      </div>
    </div>
  );
}
