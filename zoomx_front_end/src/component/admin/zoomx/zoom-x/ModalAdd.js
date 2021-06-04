import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPost } from '../../../../lib/DataSource';

export default function ModalAdd(props) {
    const [fileCover, setFileCover] = useState();
    const [file, setFile] = useState();
    const [ZoomX, setZoomX] = useState({
        content: null,
        profile:null,
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
    let handleFileCover = (e) => {
        let image = [];
        image.push(e.target.files);
        let listImage = []
        for (let i = 0; i < image[0].length; i++) {
            listImage.push(URL.createObjectURL(image[0][i]))
        }
        setFileCover(listImage)
    }
    const addZoomX = async (ZoomXData) => {
        props.handleLoading(true)
        const path = "/zoomx";
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("content", ZoomXData?.content);
        data.append("profile", ZoomXData?.profile)
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
                        <label className="label-txt">Nội dung: </label> <input className="input-txt"
                            name="content" onChange={handleZoomX}
                            type="text"
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
                            name="imageInfor"
                            onChange={(e) => {
                                setZoomX({
                                    ...ZoomX,
                                    imageCover: e.target.files
                                })
                                handleFileCover(e)

                            }}
                            multiple
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        {fileCover?.map(item => {
                            return (
                                <div style={{ margin: 10 }}>
                                    <img id="target" src={item} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                addZoomX(ZoomX)
                                setFileCover(null)
                                setFile(null)
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}