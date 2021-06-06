import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doPut } from '../../../../lib/DataSource';
import { convertToEmbed } from '../../../../utils/RegexUrl';

export default function ModalAdd(props) {
    const [video, setVideo] = useState(props.data);

    const handleUpdate = async () => {
        props.handleLoading(true);

        let path = `/library/video/${video._id}`;
        let data = new FormData();
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        data.append("name", video.name);
        data.append("videoUrl", video.videoUrl);
        try {
            let resp = await doPut(path, headers, data);
            if (resp.status === 200) {
                props.handleLoading(false);
                props.getSearch()
            }
        } catch (error) {
            props.handleLoading(false);
            console.log(error)
        }
    }
    const handleVideo = (e) => {
        let { name, value } = e.target;
        setVideo({
            ...video,
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
                        <label className="label-txt">Nhập ten video</label> <input className="input-txt"
                            name="name"
                            onChange={handleVideo}
                            type="text"
                            value={video.name}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập url video</label> <input className="input-txt"
                            name="videoUrl"
                            onChange={handleVideo}
                            type="text"
                            value={video.videoUrl}
                        />
                    </div>
                    {convertToEmbed(video?.videoUrl) && <>
                        <iframe title="A" width="400" height="300" src={`https://www.youtube.com/embed/${convertToEmbed(video?.videoUrl)}`}
                            frameBorder="0" allowFullScreen></iframe>

                    </>}
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                handleUpdate()
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}