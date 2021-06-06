import React from "react";
import Modal from "react-bootstrap/Modal";
export default function ModalLookup(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="main__lookup">123123</div>
      </Modal>
    </>
  );
}
