import React from "react";
import Modal from "react-bootstrap/Modal";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
SwiperCore.use([Navigation]);
export default function ModalImage(props) {
  return (
    <>
      <Modal
        {...props}
        size="xl"
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
          {props?.listImage?.map((item, index) => {
            return (
              <SwiperSlide tag="li" className="image-item">
                <img style={{ listStyle: "none" }} src={item?.url} alt="#" />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Modal>
    </>
  );
}
