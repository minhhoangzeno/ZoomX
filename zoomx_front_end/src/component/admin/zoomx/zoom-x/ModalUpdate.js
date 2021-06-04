import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPut } from '../../../../lib/DataSource';

export default function ModalUpdate(props) {
    const [fileCover, setFileCover] = useState(props.dataZoomX.imageCover.url);
    const [file, setFile] = useState(props.dataZoomX.profile.url);
    const [ZoomX, setZoomX] = useState(props.dataZoomX);
    
    let handleZoomX = (e) => {
        const { name, value } = e.target
        setZoomX({
            ...ZoomX,
            [name]: value
        })
    }

    const updateZoomX = async (ZoomXData) => {
        props.handleLoading(true)
        const path = `/zoomx/${ZoomXData._id}`;
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("content", ZoomXData?.content);
        data.append("profile", ZoomXData?.profile)
        data.append("imageCover",ZoomXData?.imageCover)
        try {
            let res = await doPut(path, headers, data)
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
                        <label className="label-txt">Nội dung: </label> <input className="input-txt"
                            name="content" onChange={handleZoomX}
                            type="text"
                            value={ZoomX.content}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Profile: </label> <input id="file-input" type="file"
                            name="profile" 
                            onChange={(e) => {
                                setFile(URL.createObjectURL(e.target.files[0]))
                                setZoomX({
                                    ...ZoomX,
                                    profile: e.target.files[0]
                                })
                            }}
                        />
                    </div>
                    
                    <div>
                        <label>Ảnh :</label> <input id="file-input" type="file"
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
                                updateZoomX(ZoomX)
                               
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}