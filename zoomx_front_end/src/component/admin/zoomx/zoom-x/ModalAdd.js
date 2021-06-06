import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doPost } from '../../../../lib/DataSource';

export default function ModalAdd(props) {
    const [fileCover, setFileCover] = useState();
    const [zoomx, setZoomX] = useState({
        content: null,
        profile:null,
        imageCover:null
    });
  
    let handleZoomX = (e) => {
        const { name, value } = e.target
        setZoomX({
            ...zoomx,
            [name]: value
        })
    }
    console.log(zoomx)
    const addZoomX = async () => {
        console.log("a")
        props.handleLoading(true)
        const path = "/zoomx";
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("content", zoomx?.content);
        data.append("profile", zoomx?.profile)
        data.append("imageCover",zoomx?.imageCover)
        try {
            let res = await doPost(path,headers,data)
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
                        />
                    </div>
                    <div>
                        <label className="label-txt">Profile: </label> <input id="file-input" type="file"
                            name="profile" 
                            onChange={(e) => {
                                setZoomX({
                                    ...zoomx,
                                    profile: e.target.files[0]
                                })
                            }}
                        />
                    </div>
                    <div>
                        <label>Ảnh :</label> <input id="file-input" type="file"
                            name="imageInfor"
                            onChange={(e) => {
                                setZoomX({
                                    ...zoomx,
                                    imageCover: e.target.files[0]
                                })
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                            }}
                        />
                    </div>
                    <img alt="" src={fileCover} style={{ width: 300, height: 200, objectFit: 'cover' }} />
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                addZoomX()
                                setZoomX(null)
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}