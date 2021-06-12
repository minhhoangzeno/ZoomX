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
                        <form>
                            <input type="text" placeholder="Username" name="username" />
                            <div className="pw-wrapper">
                                <input type="password" placeholder="Create password" name="password" />
                                <i className="fa fa-eye password-icon" />
                            </div>
                            <div className="input-name">
                                <span>
                                    <input type="text" placeholder="Họ" name="Họ" />
                                </span>
                                <span>
                                    <input type="text" placeholder="Tên" name="Tên" />
                                </span>
                            </div>
                            <div className="set-avatar">
                                <p>Set avatar</p>
                                <input type="file" placeholder="Avatar" name="avatar" />
                            </div>
                        </form>

                        <div className="wrapper__sign-btn">
                            <div className="sign-up">
                                <span href="http://www.github.com">ĐĂNG KÍ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

