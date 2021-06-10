import React, { useState } from 'react';
import ModalRecruitment from './ModalRecruitment';

export default function RecruitmentMain({ data }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="recruitment__main">
            <div className="main__content">
                <div className="main__content--info">
                    <div className="logo">
                        <img src={data?.imageRecruitment?.url} width="130.332" height="95.788" alt="" />
                    </div>
                    <div className="content--info">
                        <strong className="title">{data?.title}</strong>
                        <div className="info">
                            <div className="row">
                                <div className="col-4">
                                    <p><strong>Nơi làm việc</strong></p>
                                    <p><strong>Cấp bậc</strong></p>
                                    <p><strong>Hình thức</strong></p>
                                    <p><strong>Kinh nghiệm</strong></p>
                                    <p><strong>Mức lương</strong></p>
                                    <p><strong>Ngành nghề</strong></p>
                                    <p><strong>Hạn chót nhận hồ sơ</strong></p>
                                    <div className="button"><button variant="primary" onClick={handleShow}>NỘP ĐƠN</button></div>
                                    <ModalRecruitment show={show} handleClose={handleClose} handleShow={handleShow}
                                    
                                    />
                                </div>
                                <div className="col-8">
                                    <p>{data?.address}</p>
                                    <p>{data?.rank}</p>
                                    <p>{data?.typeRank}</p>
                                    <p>{data?.experience}</p>
                                    <p>{data?.salary}</p>
                                    <p>{data?.career}</p>
                                    <p>{data?.dateReceived}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__content--detail">
                    <strong>Phúc lợi</strong>
                    
                    <div className="content" dangerouslySetInnerHTML={{__html:data?.welfare}}></div>
                        
                </div>
                <div className="main__content--detail">
                    <strong>Mô tả công việc</strong>
                    <div className="content" dangerouslySetInnerHTML={{__html:data?.description}}></div>
                </div>
                <div className="main__content--detail">
                    <strong>Yều cầu công việc</strong>
                    <div className="content" dangerouslySetInnerHTML={{__html:data?.requestCareer}}></div>
                </div>
            </div>
        </div>
    )
}