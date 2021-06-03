import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPut } from '../../../../lib/DataSource';

export default function ModalUpdate(props) {
    const [fileCover, setFileCover] = useState(props.dataYoungBusiness.imageYoung.url);
    const [young_business, setYoungBusiness] = useState(props.dataYoungBusiness);
    
    let handleYoungBusiness = (e) => {
        const { name, value } = e.target
        setYoungBusiness({
            ...young_business,
            [name]: value
        })
    }

    const updateYoungBusiness = async (young_businessData) => {
        props.handleLoading(true)
        const path = `/youngbusiness/${young_businessData._id}`;
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("title", young_businessData?.title);
        data.append("content", young_businessData?.content)
        data.append("imageYoung",young_businessData?.imageYoung)
        try {
            let res = await doPut(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getYoungBusiness()
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
                        <label className="label-txt">Title: </label> <input className="input-txt"
                            name="title" onChange={handleYoungBusiness}
                            type="text"
                            value={young_business.title}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Content: </label> <textarea className="input-txt"
                            name="content" onChange={handleYoungBusiness}
                            type="text"
                            value={young_business.content}
                        />
                    </div>
                    <div>
                        <label>Anh :</label> <input id="file-input" type="file"
                            name="imageYoung"
                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setYoungBusiness({
                                    ...young_business,
                                    imageYoung: e.target.files[0]
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
                                updateYoungBusiness(young_business)
                               
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}