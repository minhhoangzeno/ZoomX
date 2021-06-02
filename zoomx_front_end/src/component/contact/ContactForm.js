import React from 'react';

export default function ContactForm( {data}) {
    return(
        <div className="col-md-6 col-12">
                        <div className="contact__form">
                            <div className="contact__form__title">
                                <p>{data.title}</p>
                            </div>
                            <div className="contact__form__content">
                                <p>
                                    {data.content}
                                </p>
                            </div>
                            <div className="contact__form__main">
                                <form action="post">
                                    <div className="form__main">
                                        <div className="combo--item">
                                            <div className="form--item">
                                                <p>Tên</p>
                                                <input type="text" name="last_name" />
                                            </div>
                                            <div className="form--item">
                                                <p>Họ</p>
                                                <input type="text" name="first_name" />
                                            </div>
                                        </div>
                                        
                                        <div className="combo--item">
                                            <div className="form--item">
                                                <p>Email</p>
                                                <input type="email" name="email" />
                                            </div>
                                            <div className="form--item">
                                                <p>Số điện thoại</p>
                                                <input type="text" name="phone" />
                                            </div>
                                        </div>
                                        
                                        <div className="form--mess">
                                            <p>Tin nhắn</p>
                                            <textarea name="" id="" cols="30" rows="3"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="contact__form__button">
                                <button>
                                    <strong>GỬI</strong>
                                </button>
                        </div>
                        </div>
                        
                    </div>
    )
}