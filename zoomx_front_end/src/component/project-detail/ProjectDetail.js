import React from 'react';
import '../../style/project-detail.scss';
import infoImg from '../../image/investment/img.png'
import ImageBg from '../../image/project/background.jpg'

export default function ProjectDetail() {
    return (
        <>
            <div className="project__wrapper">
                <div className="container-fluid">
                    <div className="row row__info-project-detail">
                        <div className="wrapper__info">
                            <h1 className="tilte"> THÔNG TIN DỰ ÁN</h1>
                            <div className="info-project-content">
                                <div className="col-info">
                                    <div className="info-wrapper">
                                        <p>
                                            <svg style={{ width: 24, height: 24, color: '#cc0000' }} viewBox="0 0 26 26">
                                                <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
                                            </svg>
                                            <strong>
                                                Địa điểm
                                            </strong>
                                            :
                                            Hạ Long, Quảng Ninh

                                        </p>
                                        <p>
                                            <svg style={{ width: 24, height: 24, color: '#cc0000' }} viewBox="0 0 26 26">
                                                <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
                                            </svg>
                                            <strong>
                                                Diện tích
                                            </strong>
                                            : Gần 300 ha
                                        </p>
                                        <p>
                                            <svg style={{ width: 24, height: 24, color: '#cc0000' }} viewBox="0 0 26 26">
                                                <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
                                            </svg>
                                            <strong>
                                                Tổng vốn đầu tư
                                            </strong>
                                            : 12000 tỉ đồng

                                        </p>
                                        <p>
                                            <svg style={{ width: 24, height: 24, color: '#cc0000' }} viewBox="0 0 26 26">
                                                <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
                                            </svg>
                                            <strong>
                                                Hạng mục đầu tư
                                            </strong>
                                            :
                                            <span>
                                                2.600 căn shophouse, liền kề<br />
                                                04 tòa chung cư<br />
                                                Hệ thống trường liên cấp<br />
                                                Bể bơi ngoài trời<br />
                                                Khu phố lễ hội<br />
                                                Quảng trường<br />
                                            </span>
                                        </p>
                                        <p>
                                            <svg style={{ width: 24, height: 24, color: '#cc0000' }} viewBox="0 0 26 26">
                                                <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
                                            </svg>
                                            <strong>
                                                Thời gian khởi công
                                            </strong>
                                            : Tháng 12/2020
                                        </p>
                                        <p className="no-mg">
                                            <svg style={{ width: 24, height: 24, color: '#cc0000' }} viewBox="0 0 26 26">
                                                <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" />
                                            </svg>
                                            <strong>
                                                Thời gian hoàn thành
                                            </strong>
                                            : Tháng 12/2022
                                        </p>
                                    </div>
                                </div>
                                <div className="col-img">
                                    <div className="img-wrapper">
                                        <img src={infoImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row__back-ground">
                        <img src={ImageBg} alt="" />
                    </div>
                    <div className="row row__text-content">
                        <div className="wrapper__text-content">
                            <p>
                                Được tư vấn thiết kế bởi Humphreys & Partners Architects, một trong những công ty thiết kế kiến trúc hàng đầu tại Hoa Kỳ, FLC Tropical City Ha Long được phân bổ thành bốn phân khu độc đáo với 4 phong cách khác nhau thể hiện qua 2.600 căn shophouse, liền kề và gần 826 căn chung cư. Được tư vấn thiết kế bởi Humphreys & Partners Architects, một trong những công ty thiết kế kiến trúc hàng đầu tại Hoa Kỳ, FLC Tropical City Ha Long được phân bổ thành bốn phân khu độc đáo với 4 phong cách khác nhau thể hiện qua 2.600 căn shophouse, liền kề và gần 826 căn chung cư.
                            </p>
                            <p>
                                Được tư vấn thiết kế bởi Humphreys & Partners Architects, một trong những công ty thiết kế kiến trúc hàng đầu tại Hoa Kỳ, FLC Tropical City Ha Long được phân bổ thành bốn phân khu độc đáo với 4 phong cách khác nhau thể hiện qua 2.600 căn shophouse, liền kề và gần 826 căn chung cư. Được tư vấn thiết kế bởi Humphreys & Partners Architects, một trong những công ty thiết kế kiến trúc hàng đầu tại Hoa Kỳ, FLC Tropical City Ha Long được phân bổ thành bốn phân khu độc đáo với 4 phong cách khác nhau thể hiện qua 2.600 căn shophouse, liền kề và gần 826 căn chung cư.
                            </p>
                        </div>
                    </div>
                    <div className="row row__img-content">
                        <div className="wrapper__img-content">
                            <div className="col-xl-6 col-lg-6 col-sm-12 col-img col__img--left">
                                <div className="wrapper__img">
                                    <img src={infoImg} alt="" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-sm-12 col-img col__img--right">
                                <div className="wrapper__img">
                                    <img src={infoImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}