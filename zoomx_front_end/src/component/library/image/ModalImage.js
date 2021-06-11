// import React from "react";
import Modal from "react-bootstrap/Modal";
// import "swiper/components/navigation/navigation.min.css";
// import SwiperCore, { Navigation } from "swiper/core";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// SwiperCore.use([Navigation]);
// export default function ModalImage(props) {
//   return (
//     <>
//       <Modal
//         {...props}
//         size="xl"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Swiper
//           tag="section"
//           wrapperTag="ul"
//           navigation
//           pagination
//           spaceBetween={0}
//           slidesPerView={1}
//         >
//           {props?.listImage?.map((item, index) => {
//             return (
//               <SwiperSlide tag="li" className="image-item">
//                 <img style={{ listStyle: "none" }} src={item?.url} alt="#" />
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </Modal>
//     </>
//   );
// }
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import "./styles.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

export default function ModalImage(props) {
  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Swiper wrapperTag="ul" navigation={true} className="mySwiper">
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
