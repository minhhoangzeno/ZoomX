import React from "react";
import Modal from "react-bootstrap/Modal";
import '../../../style/library-video.scss';

export default function ModalVideo(props) {
  return (
    <>
      <Modal
        {...props}
        size="sm"
        centered
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modal__library__video"
       
      >
        {/* <Modal.Header closeButton></Modal.Header> */}
        <div className="main__video">
          <iframe
            className="video__stream"
            src={`https://www.youtube.com/embed/${props?.videoId}`}
            frameborder="0"
            title="c"
          ></iframe>
        </div>
      </Modal>
    </>
  );
}
