import React, { useEffect } from 'react';
import Img from '../../image/investment/img.png';
import { useHistory } from 'react-router-dom';
export default function Investment() {
    let history = useHistory();
    return (
        <>
            <div className="investment-wrapper">
                <div className="container-fluid">
                    <div className="row investment__row--first">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 col-img col-investment">
                            <div className="img-wrapper">
                                <div className="bg-inner"></div>
                                <img src={Img} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 col-content col-investment">
                            <div className="content-wrapper">
                                <strong>01</strong><span>/</span>
                                <h2>KHÁCH SẠN</h2>
                                <p>Là một trong những thương hiệu dẫn đầu trong ngành khách sạn du lịch nghỉ dưỡng tại Việt Nam, Tập đoàn FLC sở hữu hệ…</p>
                                <a className="read-more-btn" onClick={() => history.push('/detail-project')}>XEM THÊM</a>
                            </div>
                        </div>
                    </div>
                    <div className="row investment__row--second">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 col-img col-investment">
                            <div className="img-wrapper">
                                <div className="bg-inner"></div>
                                <img src={Img} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 col-content col-investment">
                            <div className="content-wrapper">
                                <strong>02</strong><span>/</span>
                                <h2>KHÁCH SẠN</h2>
                                <p>Là một trong những thương hiệu dẫn đầu trong ngành khách sạn du lịch nghỉ dưỡng tại Việt Nam, Tập đoàn FLC sở hữu hệ…</p>
                                <a className="read-more-btn">XEM THÊM</a>
                            </div>
                        </div>
                    </div>
                    <div className="row investment__row--third">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 col-img col-investment">
                            <div className="img-wrapper">
                                <div className="bg-inner"></div>
                                <img src={Img} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 col-content col-investment">
                            <div className="content-wrapper">
                                <strong>03</strong>
                                <span>/</span>
                                <h2>KHÁCH SẠN</h2>
                                <p>Là một trong những thương hiệu dẫn đầu trong ngành khách sạn du lịch nghỉ dưỡng tại Việt Nam, Tập đoàn FLC sở hữu hệ…</p>
                                <a className="read-more-btn">XEM THÊM</a>
                            </div>
                        </div>
                    </div>
                    <div className="row investment__row--fourth">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 col-img col-investment">
                            <div className="img-wrapper">
                                <div className="bg-inner"></div>
                                <img src={Img} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 col-content col-investment">
                            <div className="content-wrapper">
                                <strong>04</strong>
                                <span>/</span>
                                <h2>KHÁCH SẠN</h2>
                                <p>Là một trong những thương hiệu dẫn đầu trong ngành khách sạn du lịch nghỉ dưỡng tại Việt Nam, Tập đoàn FLC sở hữu hệ…</p>
                                <a className="read-more-btn">XEM THÊM</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
