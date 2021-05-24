import React from 'react';
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
                            <a href="http://www.github.com" className="text">Forgot password?</a>
                        </div>
                        <div className="wrapper__sign">
                            <div className="sign-in">
                                <a href="http://www.github.com">ĐĂNG NHẬP</a>
                            </div>
                            <div className="sign-up">
                                <a href="http://www.github.com">Chưa có tài khoản? <span>Đăng kí ngay</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}