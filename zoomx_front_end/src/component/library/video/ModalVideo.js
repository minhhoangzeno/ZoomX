import React from "react";
import Modal from "react-bootstrap/Modal";
export default function ModalVideo(props) {
  return (
    <>
      <Modal
        {...props}
        size="sm"
       
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
