import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { doGet, doPost } from '../../lib/DataSource';
export default function Login() {
    const [account, setAccount] = useState();
    let history = useHistory()
    let [user, setuser] = useState();
    useEffect(() => {
        if (user) {
            history.push("/admin")
            localStorage.setItem("user",JSON.stringify(user))
        } else {
            history.push("/login")
        }
    }, [user])
    let login = async () => {
        let path = "/login";
        let data = new FormData();
        data.append("username", account?.username);
        data.append("password", account?.password);
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        try {
            let resp = await doPost(path, headers, data);
            if (resp.status === 200) {
                setuser(resp.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="wrapper__login">
                <div className="main__login">
                    <div className="wrapper__sign">
                        <div className="title">
                            <h1>Login to your account</h1>
                        </div>
                        <input className="mail-btn" placeholder="Email address"
                            onChange={(e) => {
                                setAccount({
                                    ...account,
                                    username: e.target.value
                                })
                            }}
                        />
                        <input className="pw-btn" placeholder="Password"
                            onChange={(e) => {
                                setAccount({
                                    ...account,
                                    password: e.target.value
                                })
                            }}
                        />
                        <div className="forgot-pw">
                            <a href="http://www.github.com" className="text">Forgot password?</a>
                        </div>
                        <div className="wrapper__sign">
                            <div className="sign-in">
                                <div
                                    onClick={() => {
                                        login()

                                    }}
                                >ĐĂNG NHẬP</div>
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