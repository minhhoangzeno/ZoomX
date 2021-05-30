import React from 'react';
import { useHistory } from 'react-router';

export default function InvestmentItem({ data, indexNum }) {
    let history = useHistory();
    return (
        <>
            <div className="row investment__row--first">
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 col-img col-investment">
                    <div className="img-wrapper">
                        <div className="bg-inner"></div>
                        <img src={data?.imageCover?.url} alt="" />
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 col-content col-investment">
                    <div className="content-wrapper">
                        <strong>{indexNum}</strong><span>/</span>
                        <h2 src={data?.InvestmentName}></h2>
                        <p>Là một trong những thương hiệu dẫn đầu trong ngành khách sạn du lịch nghỉ dưỡng tại Việt Nam, Tập đoàn FLC sở hữu hệ…</p>
                        <a href="http://www.github.com" className="read-more-btn" onClick={() => history.push('/detail-project')}>XEM THÊM</a>
                    </div>
                </div>
            </div>
        </>
    )
}