import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPost } from '../../../lib/DataSource';
import { Editor } from '@tinymce/tinymce-react';
import { tinyconfig } from '../../../TinyConfig';
export default function ModalAdd(props) {
    const [fileCover, setFileCover] = useState();
    const [recruitment, setRecruitment] = useState({})


    let handleRecruitment = (e) => {
        const { name, value } = e.target
        setRecruitment({
            ...recruitment,
            [name]: value
        })
    }

    const addRecruitment = async (recruitmentData) => {
        props.handleLoading(true)
        const path = "/recruitment";
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("title", recruitment?.title);
        data.append("address", recruitment?.address)
        data.append("rank", recruitment?.rank)
        data.append("typeRank", recruitment?.typeRank);
        data.append("experience", recruitment?.experience)
        data.append("salary", recruitment?.salary)
        data.append("career", recruitment?.career);
        data.append("dateReceived", recruitment?.dateReceived)
        data.append("imageRecruitment", recruitment?.imageRecruitment)
        data.append("welfare", recruitment?.welfare);
        data.append("description", recruitment?.description)
        data.append("requestCareer", recruitment?.requestCareer)
        try {
            let res = await doPost(path, headers, data)
            if (res.status === 200) {
                props.handleLoading(false)
                props.getSearch()
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
                            name="title"
                            type="text"
                            onChange={handleRecruitment}
                        />
                    </div>
                    <div>
                        <label>Ảnh hiển thị:</label> <input id="file-input" type="file"
                            name="imageRecruitment"
                            onChange={(e) => {
                                setRecruitment({
                                    ...recruitment,
                                    imageRecruitment: e.target.files[0]
                                })
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                            }}
                        />
                    </div>
                    <div>
                        <img id="target" src={fileCover} style={{ width: 200, height: 'auto' }} alt="" />
                    </div>
                    <div>
                        <label className="label-txt">Địa chỉ làm việc: </label> <input className="input-txt"
                            name="address"
                            type="text"
                            onChange={handleRecruitment}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Cấp bậc: </label> <input className="input-txt"
                            name="rank"
                            type="text"
                            onChange={handleRecruitment}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Hình thức: </label> <input className="input-txt"
                            name="typeRank"
                            type="text"
                            onChange={handleRecruitment}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Kinh nghiệm: </label> <input className="input-txt"
                            name="experience"
                            type="text"
                            onChange={handleRecruitment}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Mức lương: </label> <input className="input-txt"
                            name="salary"
                            type="text"
                            onChange={handleRecruitment}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Ngành nghề: </label> <input className="input-txt"
                            name="career"
                            type="text"
                            onChange={handleRecruitment}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Hạn chót nhận hồ sơ: </label> <input className="input-txt"
                            name="dateReceived"
                            type="date"
                            onChange={handleRecruitment}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Phúc lợi: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}
                            onEditorChange={(event) => {
                                setRecruitment({
                                    ...recruitment,
                                    welfare: event
                                })
                            }}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Mô tả công việc: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}

                            onEditorChange={(event) => {
                                setRecruitment({
                                    ...recruitment,
                                    description: event
                                })
                            }}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Yêu cầu công việc: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}

                            onEditorChange={(event) => {
                                setRecruitment({
                                    ...recruitment,
                                    requestCareer: event
                                })
                            }}

                        />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                addRecruitment(recruitment)
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