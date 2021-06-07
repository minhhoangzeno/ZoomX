import Modal from "react-bootstrap/Modal";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
import anh from "../../../image/modal/anh.jpg";
import anh1 from "../../../image/modal/anh1.jpg";
import anh2 from "../../../image/modal/anh2.jpg";
import anh3 from "../../../image/modal/anh3.jpg";
import anh4 from "../../../image/modal/anh4.jpg";
import anh5 from "../../../image/modal/anh5.jpg";
SwiperCore.use([Navigation]);
export default function ModalImage(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Swiper
          tag="section"
          wrapperTag="ul"
          navigation
          pagination
          spaceBetween={0}
          slidesPerView={1}
        >
          <SwiperSlide tag="li">
            <img style={{ listStyle: "none" }} src={anh} alt="#" />
          </SwiperSlide>
          <SwiperSlide tag="li">
            <img style={{ listStyle: "none" }} src={anh1} alt="#" />
          </SwiperSlide>
          <SwiperSlide tag="li">
            <img style={{ listStyle: "none" }} src={anh2} alt="#" />
          </SwiperSlide>
          <SwiperSlide tag="li">
            <img style={{ listStyle: "none" }} src={anh3} alt="#" />
          </SwiperSlide>
          <SwiperSlide tag="li">
            <img style={{ listStyle: "none" }} src={anh4} alt="#" />
          </SwiperSlide>
          <SwiperSlide tag="li">
            <img style={{ listStyle: "none" }} src={anh5} alt="#" />
          </SwiperSlide>
        </Swiper>
      </Modal>
    </>
  );
}
