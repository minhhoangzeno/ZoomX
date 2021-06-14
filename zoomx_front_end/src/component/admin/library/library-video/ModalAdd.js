import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doPost } from '../../../../lib/DataSource';
import { convertToEmbed } from '../../../../utils/RegexUrl';

export default function ModalAdd(props) {
    const [video, setVideo] = useState();

    const handleAdd = async () => {
        props.handleLoading(true);

        let path = "/library/video";
        let data = new FormData();
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        data.append("name", video.name);
        data.append("videoUrl", video.videoUrl);
        try {
            let resp = await doPost(path, headers, data);
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
                        <label className="label-txt">Nhập tên video</label> <input className="input-txt"
                            name="name"
                            onChange={handleVideo}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập url video</label> <input className="input-txt"
                            name="videoUrl"
                            onChange={handleVideo}
                            type="text"
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
                                handleAdd()
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}