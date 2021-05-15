import React from 'react';
import logo from '../../image/zoomX/item4.png'
export default function Login() {
    return (
        <>
            <div className="wrapper__login">
                <div className="main__login">
                    <div className="wrapper__sign">
                        <div className="title">
                            <h1>Login to your account</h1>
                        </div>
                        <input className="mail-btn" placeholder="Email address" />
                        <input className="pw-btn" placeholder="Password" />
                        <div className="forgot-pw">
                            <a className="text">Forgot password?</a>
                        </div>
                        <div className="wrapper__sign">
                            <div className="sign-in">
                                <a>ĐĂNG NHẬP</a>
                            </div>
                            <div className="sign-up">
                                <a>Chưa có tài khoản? <span>Đăng kí ngay</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}