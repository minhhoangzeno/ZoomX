import React from 'react';
import Modal from 'react-bootstrap/Modal'
import '../../../../style/admin/investment.scss';

export default function ModalInvestment(props) {
    return (
        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <div className="wrapper__modal">
                    <div>
                        <label className="label-txt">Nhập tên lĩnh vực đầu tư: </label> <input className="input-txt" type="text" />
                    </div>
                    <div>
                        <label className="label-txt">Mô tả lĩnh vực đầu tư: </label> <input className="input-txt" type="text" />
                    </div>
                    <div>
                        <label>Chọn ảnh cover:</label> <input id="file-input" type="file" />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={props.onHide}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}