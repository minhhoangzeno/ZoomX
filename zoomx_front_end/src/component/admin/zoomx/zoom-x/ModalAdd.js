import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPost } from '../../../../lib/DataSource';

export default function ModalAdd(props) {
    const [fileCover, setFileCover] = useState();
    const [ZoomX, setZoomX] = useState({
        title: null,
        label:null,
        imageCover:null
    });
    console.log(ZoomX)
    let handleZoomX = (e) => {
        const { name, value } = e.target
        setZoomX({
            ...ZoomX,
            [name]: value
        })
    }

    const addZoomX = async (ZoomXData) => {
        props.handleLoading(true)
        const path = "/zoomx";
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("title", ZoomXData?.title);
        data.append("label", ZoomXData?.label)
        data.append("imageCover",ZoomXData?.imageCover)
        try {
            let res = await doPost(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getZoomX()
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
                            name="title" onChange={handleZoomX}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Label: </label> <input className="input-txt"
                            name="label" onChange={handleZoomX}
                            type="text"
                        />
                    </div>
                    <div>
                        <label>Anh :</label> <input id="file-input" type="file"
                            name="imageCover"
                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setZoomX({
                                    ...ZoomX,
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
                                addZoomX(ZoomX)
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