import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import vn from "../../image/homePage/vn.png";
export default function FieldComponent() {
  return (
    <>
      <div className="main__field--top">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="field__slide">
            <img className="field__img" src={vn} alt="" />
            <div className="">
              <p> Tháng 4 30, 2021</p>
              <p>Kinh nghiệm du lịch Ninh Bình 4 ngày 3 đêm</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="field__slide">
            <img className="field__img" src={vn} alt="" />
          </SwiperSlide>
          <SwiperSlide className="field__slide">
            <img className="field__img" src={vn} alt="" />
          </SwiperSlide>
          <SwiperSlide className="field__slide">
            <img className="field__img" src={vn} alt="" />
          </SwiperSlide>
          <SwiperSlide className="field__slide">
            <img className="field__img" src={vn} alt="" />
          </SwiperSlide>
          <SwiperSlide className="field__slide">
            <img className="field__img" src={vn} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
