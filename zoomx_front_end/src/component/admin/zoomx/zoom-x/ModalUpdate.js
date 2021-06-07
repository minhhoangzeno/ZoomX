import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doPut } from '../../../../lib/DataSource';
import { tinyconfig } from '../../../../TinyConfig';
import { Editor } from '@tinymce/tinymce-react';
export default function ModalUpdate(props) {
    const [fileCover, setFileCover] = useState(props.dataZoomX.imageCover.url);
    const [zoomx, setZoomX] = useState(props.dataZoomX);



    const updateZoomX = async () => {
        props.handleLoading(true)
        const path = `/zoomx/${zoomx._id}`;
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("content", zoomx?.content);
        data.append("profile", zoomx?.profile)
        data.append("imageCover", zoomx?.imageCover)
        try {
            let res = await doPut(path, headers, data)
            if (res.status === 200) {
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
                        <label className="label-txt">Nội dung: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}
                            onEditorChange={(event) => {
                                setZoomX({
                                    ...zoomx,
                                    content: event
                                })
                            }}

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
                            name="imageCover"
                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setZoomX({
                                    ...zoomx,
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
                                updateZoomX()

                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}