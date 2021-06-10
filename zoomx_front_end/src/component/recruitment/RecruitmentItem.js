import moment from 'moment';
import React from 'react';
import { useHistory } from 'react-router';
import icon_money from '../../image/icon/money.png'
export default function RecruitmentItem({ data }) {
    let history = useHistory();
    return (
        <div className="col-lg-4 col-sm-6 col-12" onClick={() => history.push({
            pathname: '/detail-recruitment',
            state: data?._id
        })}>
            <div className="recruitment__list__block">
                <div className="block__info">
                    <div className="block__info--logo">
                        
                        <img src={data?.imageRecruitment?.url} width="92.332" height="67.86" alt="" />
                    </div>
                    <div className="block__info--title">
                        <strong>{data?.title}</strong>
                    </div>
                    <div className="block__info--address">
                        <div className="icon">
                            <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
                            </svg>
                        </div>
                        <div className="value">
                            <p>{data?.address}</p>
                        </div>
                    </div>
                    <div className="block__info--salary">
                        <div className="icon">
                            <img width="24px" height="24px" src={icon_money} alt="" />
                        </div>
                        <div className="value">
                            <p> {data?.salary}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="block__info--deadline">
                        <p>Hạn chót nhận hồ sơ: <span>{moment(data?.dateReceived).format("DD/MM/YYYY")}</span></p>
                    </div>
                </div>
                <div className="block__bottom"></div>
            </div>
        </div>
    )
}