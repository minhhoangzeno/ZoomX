import React from "react";
import ProjectItem from "./ProjectItem";
import ModalProject from "./ModalProject";
export default function Project() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      Du an
      <button onClick={() => setModalShow(true)}>Thêm</button>
      <div className="container">
        <div className="row main__admin">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
      <ModalProject show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
