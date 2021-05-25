import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPut } from '../../../../lib/DataSource';
import '../../../../style/admin/investment.scss';

export default function ModalUpdate(props) {
    const { dataRecruitment } = props;
    const [recruitment, setRecruitment] = useState(dataRecruitment);
    const [fileCover, setFileCover] = useState(dataRecruitment.imageRecruitment?.url);

    let handleRecruitment = (event) => {
        const { name, value } = event.target
        setRecruitment({
            ...recruitment,
            [name]: value
        })
    }


    const updateRecruitment = async (recruitmentData, recruitment_id) => {
        props.handleLoading(true);
        const path = `/recruitment/${recruitment_id}`;
        const headers = {
            Accept: "*/*",
            "Content-Type": "multipart/form-data"
        }
        let data = new FormData();
        data.append("title", recruitmentData.title);
        data.append("imageRecruitment", recruitmentData.imageRecruitment);
        data.append("address", recruitmentData.address);
        data.append("rank", recruitmentData.rank);
        data.append("typeRank", recruitmentData.typeRank);
        data.append("experience", recruitmentData.experience);
        data.append("salary", recruitmentData.salary);
        data.append("career", recruitmentData.career);
        data.append("dateReceived", recruitmentData.dateReceived);
        data.append("welfare", recruitmentData.welfare);
        data.append("description", recruitmentData.description);
        data.append("requestCareer", recruitmentData.requestCareer);
        try {
            let resp = await doPut(path, headers, data);
            if (resp.status === 200) {
                props.handleLoading(false);
                props.getRecruitment()
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
                        <label className="label-txt">Tiêu đề tuyển dụng: </label> <input className="input-txt"
                            name="title" onChange={handleRecruitment}
                            type="text"
                            value={recruitment.title}
                        />
                    </div>

                    <div>
                        <label>Ảnh:</label> <input id="file-input" type="file"
                            name="imageRecruitment"

                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setRecruitment({
                                    ...recruitment,
                                    imageRecruitment: e.target.files[0]
                                })
                            }}
                        />
                    </div>
                    <div>
                        <img id="target" src={fileCover}
                            value={recruitment.imageRecruitment?.url}
                            style={{ width: 200, height: 'auto' }} alt="" />
                    </div>
                    <div>
                        <label className="label-txt">Nhập địa chỉ : </label> <input className="input-txt"
                            name="address" onChange={handleRecruitment}
                            type="text"
                            value={recruitment.address}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập rank : </label> <input className="input-txt"
                            name="rank" onChange={handleRecruitment}
                            type="text"
                            value={recruitment.rank}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập type rank : </label> <input className="input-txt"
                            name="typeRank" onChange={handleRecruitment}
                            type="text"
                            value={recruitment.typeRank}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập experience : </label> <input className="input-txt"
                            name="experience" onChange={handleRecruitment}
                            type="text"
                            value={recruitment.experience}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập lương : </label> <input className="input-txt"
                            name="salary" onChange={handleRecruitment}
                            type="text"
                            value={recruitment.salary}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nghề nghiệp : </label> <input className="input-txt"
                            name="career" onChange={handleRecruitment}
                            type="text"
                            value={recruitment.career}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Ngày : </label> <input className="input-txt"
                            name="dateReceived" onChange={handleRecruitment}
                            type="date"
                            value={recruitment.dateReceived}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập phúc lợi : </label> <input className="input-txt"
                            name="welfare" onChange={handleRecruitment}
                            type="text"
                            value={recruitment.welfare}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập chi tiết : </label> <input className="input-txt"
                            name="description" onChange={handleRecruitment}
                            type="text"
                            value={recruitment.description}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập : </label> <input className="input-txt"
                            name="requestCareer" onChange={handleRecruitment}
                            type="text"
                            value={recruitment.requestCareer}
                        />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={async () => {
                                await updateRecruitment(recruitment,recruitment._id)
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