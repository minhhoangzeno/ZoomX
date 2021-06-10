import { Editor } from '@tinymce/tinymce-react';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doPut } from '../../../../lib/DataSource';
import { tinyconfig } from '../../../../TinyConfig';
export default function ModalUpdate(props) {
    const [fileCover, setFileCover] = useState(props?.dataReasonSelect?.imageCover?.url);
    const [reason_select, setReasonSelect] = useState(props?.dataReasonSelect);
    
    let handleReasonSelect = (e) => {
        const { name, value } = e.target
        setReasonSelect({
            ...reason_select,
            [name]: value
        })
    }

    const updateReasonSelect = async (reason_selectData) => {
        props.handleLoading(true)
        const path = `/reason-select/${reason_selectData._id}`;
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("title", reason_selectData?.title);
        data.append("content", reason_selectData?.content)
        data.append("imageCover",reason_selectData?.imageCover)
        try {
            let res = await doPut(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getReasonSelect()
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
                        <label className="label-txt">Tiêu đề: </label> <input className="input-txt"
                            name="title" onChange={handleReasonSelect}
                            type="text"
                            value={reason_select.title}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nội dung: </label> <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}
                            onEditorChange={(event) => {
                                setReasonSelect({
                                    ...reason_select,
                                    content: event
                                })
                            }}
                            value={reason_select.content}
                        />
                    </div>
                    <div>
                        <label>Ảnh :</label> <input id="file-input" type="file"
                            name="imageCover"
                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setReasonSelect({
                                    ...reason_select,
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
                                updateReasonSelect(reason_select)
                               
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}