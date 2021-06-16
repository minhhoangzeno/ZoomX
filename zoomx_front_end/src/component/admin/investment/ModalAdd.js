import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doPost } from '../../../lib/DataSource';

export default function ModalAdd(props) {
    const [fileCover, setFileCover] = useState();
    const [investment, setInvestment] = useState({
        investmentName: null,
        description:null,
        imageCover:null
    });
    let handleInvestment = (e) => {
        const { name, value } = e.target
        setInvestment({
            ...investment,
            [name]: value
        })
    }

    const addInvestment = async () => {
        props.handleLoading(true)
        const path = "/investment";
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("investmentName", investment?.investmentName);
        data.append("description", investment?.description)
        data.append("imageCover",investment?.imageCover)
        try {
            let res = await doPost(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getInvestment()
            }
    
        } catch (error) {
            props.handleLoading(false)
            console.log(error)
        }
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
                        <label className="label-txt">Nhập mô tả lĩnh vực đầu tư: </label> <input className="input-txt"
                            name="description" onChange={handleInvestment}
                            type="text"
                        />
                    </div>
                    <div>
                        <label>Ảnh lĩnh vực đầu tư:</label> <input id="file-input" type="file"
                            name="imageCover"
                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setInvestment({
                                    ...investment,
                                    imageCover: e.target.files[0]
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
                            <button onClick={() => {
                                addInvestment()
                                setFileCover(null)
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}