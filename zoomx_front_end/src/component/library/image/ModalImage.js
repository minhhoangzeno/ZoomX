import React from "react";
import Modal from "react-bootstrap/Modal";
import Slider from "react-slick";
import '../../../style/library-image.scss';

// SwiperCore.use([Pagination, Navigation]);

export default function ModalImage(props) {
  const item = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,

   
  };
  return (
    <>
      <Modal
        {...props}
        size="sm"
        centered
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modal__library--img"
      >


        <Slider className="main__slider--item" {...item}>
          {props?.listImage?.map((item, index) => {
            return (
              <img src={item?.url} alt="#" className="image__modal__library" />
            );
          })}
        </Slider>

      </Modal>
    </>
  );
}

