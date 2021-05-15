import React from 'react';
import Modal from 'react-bootstrap/Modal'
export default function ModalRecruitmentEdit(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <div>
                    <label>Tên tuyển dụng: </label>
                    <input type="text" /> 
                </div>
                
                <div>
                    <label>Ảnh cover: </label>
                    <input type="file" /> 
                </div>
                <div>
                    <button onClick={props.onHide}>Quay lai</button>
                    <button onClick={props.onHide}>Lưu</button>
                </div>
            </Modal>
        </>
    )
}