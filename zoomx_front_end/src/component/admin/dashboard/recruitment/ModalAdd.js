import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPost } from '../../../../lib/DataSource';
import '../../../../style/admin/investment.scss';

export default function ModalAdd(props) {
    const [fileCover, setFileCover] = useState();
    const [recruitment, setRecruitment] = useState();
    let handleRecruitment = (event) => {
        const { name, value } = event.target
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
            let res = await doPost(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getRecruitment()
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
                        <label className="label-txt">Nhập tiêu đề tuyển dụng: </label> <input className="input-txt"
                            name="title" onChange={handleRecruitment}
                            type="text"
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
                        <img id="target" src={fileCover} style={{ width: 200, height: 'auto' }} alt="" />
                    </div>
                    <div>
                        <label className="label-txt">Nhập địa chỉ : </label> <input className="input-txt"
                            name="address" onChange={handleRecruitment}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập rank : </label> <input className="input-txt"
                            name="rank" onChange={handleRecruitment}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập type rank : </label> <input className="input-txt"
                            name="typeRank" onChange={handleRecruitment}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập experience : </label> <input className="input-txt"
                            name="experience" onChange={handleRecruitment}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập lương : </label> <input className="input-txt"
                            name="salary" onChange={handleRecruitment}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập nghề nghiệp : </label> <input className="input-txt"
                            name="career" onChange={handleRecruitment}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập ngày : </label> <input className="input-txt"
                            name="dateReceived" onChange={handleRecruitment}
                            type="date"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập phúc lợi : </label> <input className="input-txt"
                            name="welfare" onChange={handleRecruitment}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập chi tiết : </label> <input className="input-txt"
                            name="description" onChange={handleRecruitment}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nhập : </label> <input className="input-txt"
                            name="requestCareer" onChange={handleRecruitment}
                            type="text"
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