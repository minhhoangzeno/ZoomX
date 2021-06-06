import React from "react";
import Modal from "react-bootstrap/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import hero from "../image/home/hero.png";

export default function ModalLibrary(props) {
  return (
    <>
      <div style={{ width: 200, height: 100 }}>
        <Modal
          {...props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
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
              <img style={{ listStyle: "none" }} src={hero} alt="#" />
            </SwiperSlide>
            <SwiperSlide tag="li">
              <img style={{ listStyle: "none" }} src={hero} alt="#" />
            </SwiperSlide>
            <SwiperSlide tag="li">
              <img style={{ listStyle: "none" }} src={hero} alt="#" />
            </SwiperSlide>
            <SwiperSlide tag="li">
              <img style={{ listStyle: "none" }} src={hero} alt="#" />
            </SwiperSlide>
          </Swiper>
        </Modal>
      </div>
    </>
  );
}
