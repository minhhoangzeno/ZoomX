import React from 'react';
import Modal from 'react-bootstrap/Modal'
export default function ModalInvestment(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <div>
                    <label>Nhap ten linh vuc dau tu</label>
                    <input type="text" /> 
                </div>
                <div>
                    <label>Mo ta linh vuc dau tu</label>
                    <input type="text" /> 
                </div>
                <div>
                    <label>Chon anh cover</label>
                    <input type="file" /> 
                </div>
                <div>
                    <button onClick={props.onHide}>Quay lai</button>
                    <button onClick={props.onHide}>Xac nhan</button>
                </div>
            </Modal>
        </>
    )
}