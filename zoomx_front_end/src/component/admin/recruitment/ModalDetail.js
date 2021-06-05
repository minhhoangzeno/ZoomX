import { Editor } from '@tinymce/tinymce-react';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { FormatDate } from '../../../utils/FormatDate';
export default function ModalDetail(props) {

    let fileCover = props.data.imageRecruitment.url;
    let recruitment = props.data;

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

                            value={recruitment.title}
                        />
                    </div>
                    <div>
                        <label>Ảnh hiển thị:</label>
                    </div>
                    <div>
                        <img id="target" src={fileCover} style={{ width: 200, height: 'auto' }} alt="" />
                    </div>
                    <div>
                        <label className="label-txt">Địa chỉ làm việc: </label> <input className="input-txt"
                            name="address"
                            type="text"

                            value={recruitment.address}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Cấp bậc: </label> <input className="input-txt"
                            name="rank"
                            type="text"

                            value={recruitment.rank}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Hình thức: </label> <input className="input-txt"
                            name="typeRank"
                            type="text"

                            value={recruitment.typeRank}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Kinh nghiệm: </label> <input className="input-txt"
                            name="experience"
                            type="text"

                            value={recruitment.experience}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Mức lương: </label> <input className="input-txt"
                            name="salary"
                            type="text"

                            value={recruitment.salary}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Ngành nghề: </label> <input className="input-txt"
                            name="career"
                            type="text"

                            value={recruitment.career}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Hạn chót nhận hồ sơ: </label> <span>{FormatDate(recruitment.dateReceived)}</span>
                    </div>
                    <div>
                        <label className="label-txt">Phúc lợi: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"

                            value={recruitment.welfare}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Mô tả công việc: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"

                            value={recruitment.description}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Yêu cầu công việc: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"

                            value={recruitment.requestCareer}


                        />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                        </div>
                    </div>
                </div>

            </Modal>
        </>
    )
}