import React from 'react';
export default function Signup() {
    return (
        <>
            <div className="wrapper__signup">
                <div className="main__signup">
                    <div className="wrapper__sign">
                        <div className="title">
                            <h1>Sign up</h1>
                        </div>
                        <input className="mail-btn" placeholder="Email address" 
                        name="username"
                        />
                        <input className="pw-btn" placeholder="Password" />
                        <input className="confirm-btn" placeholder="Confirm Password" />
                        <div className="wrapper__sign-btn">
                            <div className="sign-up">
                                <a href="http://www.github.com">ĐĂNG KÍ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}