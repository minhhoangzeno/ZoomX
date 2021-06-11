import moment from 'moment';
import React, { useState } from 'react';
import ModalRecruitment from './ModalRecruitment';

export default function RecruitmentMain({ data }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(data?.welfare)
    const str = data?.welfare;
    const welfare = str.split("\n");
    const welfareLeft = [];
    const welfareRight = [];
    welfare?.map((item, index) => {
        if (index % 2 === 0) {
            welfareLeft.push(item)
        } else {
            welfareRight.push(item)
        }
    })
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
                                        address={data?.address}
                                        rank={`${data?.rank} ${data?.career}`}
                                        logo={data?.imageRecruitment?.url}
                                    />
                                </div>
                                <div className="col-8">
                                    <p>{data?.address}</p>
                                    <p>{data?.rank}</p>
                                    <p>{data?.typeRank}</p>
                                    <p>{data?.experience}</p>
                                    <p>{data?.salary}</p>
                                    <p>{data?.career}</p>
                                    <p>{moment(data?.dateReceived).format("DD/MM/YYYY")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__content--detail">
                    <strong>Phúc lợi</strong>
                    <div className="content" style={{ display: 'flex' }}>
                        <div className="welfare-left">
                            {welfareLeft?.map((item, index) => {
                                return (
                                    <div className="item" key={index} dangerouslySetInnerHTML={{ __html: item }} ></div>
                                )
                            })}
                        </div>
                        <div className="welfare-right">
                            {welfareRight?.map((item, index) => {
                                return (
                                    <div className="item" key={index} dangerouslySetInnerHTML={{ __html: item }} ></div>
                                )
                            })}
                        </div>
                    </div>


                </div>
                <div className="main__content--detail">
                    <strong>Mô tả công việc</strong>
                    <div className="content" dangerouslySetInnerHTML={{ __html: data?.description }}></div>
                </div>
                <div className="main__content--detail">
                    <strong>Yều cầu công việc</strong>
                    <div className="content" dangerouslySetInnerHTML={{ __html: data?.requestCareer }}></div>
                </div>
            </div>
        </div>
    )
}