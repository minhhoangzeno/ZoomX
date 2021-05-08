import React from 'react';
import hotel from '../../image/contact/hotel.png'
export default function ContactInfo() {
    return(
        <div className="col-md-6 col-12">
                        <div className="contact__info">
                            <img src={hotel} alt="" />
                            <div className="contact__info--basic">
                                <div className="row">
                                    <div className="col-6">
                                        <p><strong>Địa chỉ: </strong>139 Cầu Giấy</p>
                                        <p><strong>Thành phố: </strong>Hà Nội</p>
                                    </div>
                                    <div className="col-6">
                                        <p><strong>Điện thoại: </strong>0766 282 838</p>
                                        <p><strong>Email: </strong>support@zoomxhotels.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact__info--hotline">
                                <span>HOTLINE(8:30 AM-17:30 PM)</span>
                                <br />
                                <div className="hotline--number"><strong>(+84) 766 262 838</strong></div>
                            </div>
                        </div>
                    </div>
    )
}