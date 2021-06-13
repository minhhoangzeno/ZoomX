import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPut } from '../../../../lib/DataSource';

export default function ModalUpdate(props) {
    const { dataVideo } = props;
    const [Video, setVideo] = useState(dataVideo);
    const [fileCover, setFileCover] = useState(dataVideo.logo.url);

    let handleVideo = (event) => {
        const { name, value } = event.target
        setVideo({
            ...Video,
            [name]: value
        })
    }


    const updateVideo = async (VideoData, Video_id) => {
        props.handleLoading(true);
        const path = `/video/${Video_id}`;
        const headers = {
            Accept: "*/*",
            "Content-Type": "multipart/form-data"
        }
        let data = new FormData();
        data.append("videoUrl", VideoData.videoUrl);
        data.append("imageCover", VideoData.imageCover);
        try {
            let resp = await doPut(path, headers, data);
            if (resp.status === 200) {
                props.handleLoading(false);
                props.getVideo()
            }
        } catch (error) {
            console.log(error)
            props.handleLoading(false);
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
                        <label className="label-txt">Link video: </label> <input className="input-txt"
                            name="videoUrl" onChange={handleVideo}
                            type="text"
                            value={Video.videoUrl}
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
                        <img id="target" src={fileCover}
                            value={Video.imageCover.url}
                            style={{ width: 200, height: 'auto' }} alt="" />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={async () => {
                                await updateVideo(Video,Video._id)
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