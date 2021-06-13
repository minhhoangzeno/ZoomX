import React, {  useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPost } from '../../../../lib/DataSource';

export default function ModalAdd(props) {
    const [fileCover, setFileCover] = useState();
    const [Video, setVideo] = useState();
    let handleVideo = (event) => {
        const { name, value } = event.target
        setVideo({
            ...Video,
            [name]: value
        })
    }

    const addVideo = async (VideoData) => {
        props.handleLoading(true)
        const path = "/video";
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("videoUrl", VideoData?.videoUrl);
        data.append("imageCover", VideoData?.imageCover)
        try {
            let res = await doPost(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getVideo()
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
                        <label className="label-txt">Nhập link video: </label> <input className="input-txt"
                            name="videoUrl" onChange={handleVideo}
                            type="text"
                        />
                    </div>
                    
                    <div>
                        <label>Ảnh:</label> <input id="file-input" type="file"
                            name="imageCover"
                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setVideo({
                                    ...Video,
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
                                addVideo(Video)
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