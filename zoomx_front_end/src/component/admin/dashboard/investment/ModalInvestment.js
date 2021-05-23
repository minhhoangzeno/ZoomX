import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { addInvestment } from '../../../../lib/api/InvestmentAPI';
import '../../../../style/admin/investment.scss';

export default function ModalInvestment(props) {
    const [fileCover, setFileCover] = useState();
    const [investment, setInvestment] = useState();
    let handleInvestment = (event) => {
        const { name, value } = event.target
        setInvestment({
            ...investment,
            [name]: value
        })
    }
    return (
        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <div className="wrapper__modal">
                    <div>
                        <label className="label-txt">Nhập tên lĩnh vực đầu tư: </label> <input className="input-txt"
                            name="investmentName" onChange={handleInvestment}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Mô tả lĩnh vực đầu tư: </label> <input className="input-txt" type="text"
                            name="description" onChange={handleInvestment}
                        />
                    </div>
                    <div>
                        <label>Chọn ảnh cover:</label> <input id="file-input" type="file"
                        name="imageCover"
                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setInvestment({
                                    ...investment,
                                    imageCover:e.target.files[0]
                                })
                            }}
                        />
                    </div>
                    <div>
                        <img id="target" src={fileCover} style={{ width: 200, height: 'auto' }} alt="" />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={async () => {
                              await addInvestment(investment)
                              props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}