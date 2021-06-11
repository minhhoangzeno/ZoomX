import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import vn from "../../image/homePage/vn.png";
import { doGet } from '../../lib/DataSource';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
export default function News() {
  const [data, setData] = useState();
  let history = useHistory()
  useEffect(() => {
    async function fetchData() {
      let path = "/blog-sort";
      try {
        let resp = doGet(path);
        if ((await resp).status === 200) {
          setData((await resp).data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  })
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
        {" "}
        WELCOME &nbsp; TO &nbsp; ZOOMX&nbsp; HOTELS
      </p>
      <div className="empty__element-view"></div>
      <p className="big__word-view">Tin tức</p>
      <Slider className="main__slider" {...settings}>
        {data?.map((item, index) => {
          return (
            <div className="slider__item__cover">
              <div className="item-block" style={{ backgroundImage: `url(${item?.imageInfor?.url})` }}>
                <div className="news-content">
                  <p className="item__content">Tháng {moment(item?.date).format("MM, YYYY")}</p>
                  <p className="item__content-cover">
                    {item?.title}
                  </p>
                  <div className="item__btn-main"
                    onClick={() => {
                      history.push({
                        pathname: '/blog-detail',
                        state: item
                      })
                    }}
                  >XEM THÊM</div>
                </div>
              </div>
            </div>

          )
        })}
      </Slider>
      <div className="btn__item-click">
        <button>XEM THÊM</button>
      </div>
    </div>
  );
}
