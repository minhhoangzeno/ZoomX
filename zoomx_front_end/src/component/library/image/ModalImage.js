import React from "react";
import Modal from "react-bootstrap/Modal";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
SwiperCore.use([Pagination, Navigation]);

export default function ModalImage(props) {
  return (
    <>
      <Modal
        {...props}
        style={{ background_color: "red" }}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Swiper
          style={{ background_color: "red" }}
          wrapperTag="ul"
          navigation={true}
          className="mySwiper"
        >
          {props?.listImage?.map((item, index) => {
            return (
              <SwiperSlide tag="li" className="image-item" key={index}>
                <img style={{ listStyle: "none" }} src={item?.url} alt="#" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Modal>
    </>
  );
}
