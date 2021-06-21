import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalDetail(props) {
  let pj = [];
  props.data?.imageList.map((item) => {
    pj.push(item?.url);
    return pj;
  });
  const name = props.data.name;
  const fileCover = props?.data?.imageCover?.url;
  const fileList = pj;

  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <div className="wrapper__modal">
          <div>
            <label className="label-txt">Nhập ten thu vien</label>{" "}
            <input className="input-txt" name="name" value={name} type="text" />
          </div>
          <div>
            <div>
              <label>Ảnh Cover:</label>
            </div>
            {fileCover ? (
              <div>
                <img
                  id="target"
                  src={fileCover}
                  style={{ width: 300, height: 200, objectFit: "cover" }}
                  alt=""
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <label>Ảnh List:</label>
          </div>
          <div style={{ display: "flex" }}>
            {fileList?.map((item, idx) => {
              return (
                <div key={idx} style={{ margin: 10 }}>
                  <img
                    id="target"
                    src={item}
                    style={{ width: 300, height: 200, objectFit: "cover" }}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          <div className="btn--bottom">
            <div className="wrapper__btn">
              <button className="back-btn" onClick={props.onHide}>
                Quay lại
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
