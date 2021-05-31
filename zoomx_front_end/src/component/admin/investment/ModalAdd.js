import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPost } from '../../../lib/DataSource';

export default function ModalAdd(props) {
    const [fileCover, setFileCover] = useState();
    const [investment, setInvestment] = useState({
        investmentName: null,
        description:null,
        imageCover:null
    });
    console.log(investment)
    let handleInvestment = (e) => {
        const { name, value } = e.target
        setInvestment({
            ...investment,
            [name]: value
        })
    }

    const addInvestment = async (investmentData) => {
        props.handleLoading(true)
        const path = "/investment";
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("investmentName", investmentData?.investmentName);
        data.append("description", investmentData?.description)
        data.append("imageCover",investmentData?.imageCover)
        try {
            let res = await doPost(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getInvestmet()
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
                        <label className="label-txt">Nhập linh vuc dau tu: </label> <input className="input-txt"
                            name="investmentName" onChange={handleInvestment}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập mo ta linh vuc dau tu: </label> <input className="input-txt"
                            name="description" onChange={handleInvestment}
                            type="text"
                        />
                    </div>
                    <div>
                        <label>Anh linh vuc dau tu:</label> <input id="file-input" type="file"
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
                                addInvestment(investment)
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