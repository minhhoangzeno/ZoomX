import { Editor } from '@tinymce/tinymce-react';
import moment from 'moment';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doPut } from '../../../lib/DataSource';
export default function ModalUpdate(props) {
    const [fileCover, setFileCover] = useState(props.data.imageRecruitment.url);
    const [recruitment, setRecruitment] = useState(props.data)
  
    let handleRecruitment = (e) => {
        const { name, value } = e.target
        setRecruitment({
            ...recruitment,
            [name]: value
        })
    }

    const updateRecruitment = async (recruitmentData) => {
        props.handleLoading(true)
        const path = `/recruitment/${recruitment._id}`;
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
            let res = await doPut(path, headers, data)
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
                        <label className="label-txt">Ti??u ?????: </label> <input className="input-txt"
                            name="title"
                            type="text"
                            onChange={handleRecruitment}
                            value={recruitment.title}
                        />
                    </div>
                    <div>
                        <label>???nh hi???n th???:</label> <input id="file-input" type="file"
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
                        <label className="label-txt">?????a ch??? l??m vi???c: </label> <input className="input-txt"
                            name="address"
                            type="text"
                            onChange={handleRecruitment}
                            value={recruitment.address}

                        />
                    </div>
                    <div>
                        <label className="label-txt">C???p b???c: </label> <input className="input-txt"
                            name="rank"
                            type="text"
                            onChange={handleRecruitment}
                            value={recruitment.rank}

                        />
                    </div>
                    <div>
                        <label className="label-txt">H??nh th???c: </label> <input className="input-txt"
                            name="typeRank"
                            type="text"
                            onChange={handleRecruitment}
                            value={recruitment.typeRank}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Kinh nghi???m: </label> <input className="input-txt"
                            name="experience"
                            type="text"
                            onChange={handleRecruitment}
                            value={recruitment.experience}

                        />
                    </div>
                    <div>
                        <label className="label-txt">M???c l????ng: </label> <input className="input-txt"
                            name="salary"
                            type="text"
                            onChange={handleRecruitment}
                            value={recruitment.salary}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Ng??nh ngh???: </label> <input className="input-txt"
                            name="career"
                            type="text"
                            onChange={handleRecruitment}
                            value={recruitment.career}

                        />
                    </div>
                    <div>
                        <label className="label-txt">H???n ch??t nh???n h??? s??: </label> <input className="input-txt"
                            name="dateReceived"
                            type="date"
                            onChange={handleRecruitment}
                            value={moment(recruitment?.dateReceived).format("YYYY-MM-DD")}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Ph??c l???i: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            onEditorChange={(event) => {
                                setRecruitment({
                                    ...recruitment,
                                    welfare: event
                                })
                            }}
                            value={recruitment.welfare}

                        />
                    </div>
                    <div>
                        <label className="label-txt">M?? t??? c??ng vi???c: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            onEditorChange={(event) => {
                                setRecruitment({
                                    ...recruitment,
                                    description: event
                                })
                            }}
                            value={recruitment.description}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Y??u c???u c??ng vi???c: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            onEditorChange={(event) => {
                                setRecruitment({
                                    ...recruitment,
                                    requestCareer: event
                                })
                            }}
                            value={recruitment.requestCareer}


                        />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay l???i</button>
                            <button onClick={() => {
                                updateRecruitment(recruitment)
                                setFileCover(null)
                                props.onHide()
                            }}>X??c nh???n</button>
                        </div>
                    </div>
                </div>
               
            </Modal>
        </>
    )
}