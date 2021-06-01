import React from 'react';
import '../../style/blog-detail.scss'
import Img from '../../image/investment/img.png'

export default function BlogDetail() {
    return (
        <>
            <div className="blog-detail__wrapper">
                <div className="container-fluid ">
                    <div className="row first-txt-content">
                        <strong>
                            Our Lastest Rooms
                        </strong>
                        <p className="txt-content">
                            Quần thể du lịch nghỉ dưỡng sinh thái FLC Gia Lai nằm trải dài bên rừng thông Đak Đoa và đồi cỏ hồng Glar – những thắng cảnh độc đáo bậc nhất của Gia Lai. Với sự góp mặt của những đơn vị tư vấn thiết kế hàng đầu, FLC Gia Lai được định hướng trở thành một tổ hợp nghỉ dưỡng sinh thái và giải trí đạt tiêu chuẩn quốc tế, nhằm đáp ứng nhu cầu lưu trú nghỉ dưỡng, giải trí của khách du lịch trong và ngoài nước khi đến với Gia Lai nói riêng và Tây Nguyên nói chung.
                        </p>
                    </div>
                    <div className="row second-txt-content">
                        <strong>
                            Our Lastest Rooms
                        </strong>
                        <p className="txt-content">
                            Quần thể du lịch nghỉ dưỡng sinh thái FLC Gia Lai nằm trải dài bên rừng thông Đak Đoa và đồi cỏ hồng Glar – những thắng cảnh độc đáo bậc nhất của Gia Lai. Với sự góp mặt của những đơn vị tư vấn thiết kế hàng đầu, FLC Gia Lai được định hướng trở thành một tổ hợp nghỉ dưỡng sinh thái và giải trí đạt tiêu chuẩn quốc tế, nhằm đáp ứng nhu cầu lưu trú nghỉ dưỡng, giải trí của khách du lịch trong và ngoài nước khi đến với Gia Lai nói riêng và Tây Nguyên nói chung.
                        </p>
                    </div>
                    <div className="row img-content">
                        <div className="col-img">
                            <div className="img-wrapper">
                                <img src={Img} alt="" />
                            </div>
                        </div>
                        <div className="col-img">
                            <div className="img-wrapper">
                                <img src={Img} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row third-txt-content">
                        <strong>
                            Our Lastest Rooms
                        </strong>
                        <p className="txt-content">
                            Quần thể du lịch nghỉ dưỡng sinh thái FLC Gia Lai nằm trải dài bên rừng thông Đak Đoa và đồi cỏ hồng Glar – những thắng cảnh độc đáo bậc nhất của Gia Lai. Với sự góp mặt của những đơn vị tư vấn thiết kế hàng đầu, FLC Gia Lai được định hướng trở thành một tổ hợp nghỉ dưỡng sinh thái và giải trí đạt tiêu chuẩn quốc tế, nhằm đáp ứng nhu cầu lưu trú nghỉ dưỡng, giải trí của khách du lịch trong và ngoài nước khi đến với Gia Lai nói riêng và Tây Nguyên nói chung.
                        </p>
                    </div>
                    {/* <div className="tag__content">
                        <div className="col-md-2 col-sm-2 title-tag col-tag">
                            <strong>TAGS</strong>
                        </div>
                        <div className="col-md-10 col-sm-10 content-tag col-tag">
                            <div className="list__item">
                                <p className="content__little">Tin tức</p>
                                <p className="content__little">Hotel</p>
                                <p className="content__little">Tin tức</p>
                                <p className="content__little">Hotel</p>
                                <p className="content__little">Tin tức</p>
                                <p className="content__little">Hotel</p>
                                <p className="content__little">Spa</p>
                                <p className="content__little">Tin tức</p>
                                <p className="content__little">Hotel</p>
                                <p className="content__little">Tin tức</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="line"></div>
                </div>
            </div>
        </>
    )
}