import React from 'react';
import logo from '../../image/zoomX/item4.png'
export default function Signup() {
    return (
        <>
            <div className="wrapper__signup">
                <div className="main__signup">
                    <div className="wrapper__sign">
                        <div className="title">
                            <h1>Sign up</h1>
                        </div>
                        <input className="mail-btn" placeholder="Email address" />
                        <input className="pw-btn" placeholder="Password" />
                        <input className="confirm-btn" placeholder="Confirm Password" />
                        <div className="wrapper__sign-btn">
                            <div className="sign-up">
                                <a>ĐĂNG KÍ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}