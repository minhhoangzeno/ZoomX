import React from "react";
import Modal from "react-bootstrap/Modal";
export default function ModalVideo(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="main__video">
          <iframe
            className="video__stream"
            src="https://www.youtube-nocookie.com/embed/D9__vEwxI7s?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1"
            frameborder="0"
          ></iframe>
        </div>
      </Modal>
    </>
  );
}
