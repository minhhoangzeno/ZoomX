import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { doPost } from '../../lib/DataSource';
import Loading from '../image/Loading';
export default function Login() {
    const [account, setAccount] = useState();
    const [loading,setLoading] = useState(false);
    let history = useHistory()
    let [user, setuser] = useState();
    useEffect(() => {
        if (user) {
            history.push("/admin")
            localStorage.setItem("user", JSON.stringify(user))
        } else {
            history.push("/login")
        }
    }, [user])
    let login = async () => {
        setLoading(true)
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
                setLoading(false)
                setuser(resp.data)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <>
            <div className="wrapper__login">
                {loading && <Loading />}
                <div className="main__login">
                    <div className="wrapper__sign">
                        <div className="title">
                            <h1>Đăng nhập vào tài khoản</h1>
                        </div>
                        <form>
                            <input className="nameUser-btn" placeholder="Tên đăng nhập"
                                onChange={(e) => {
                                    setAccount({
                                        ...account,
                                        username: e.target.value
                                    })
                                }}
                            />
                            <input className="pw-wrapper" placeholder="Mật khẩu"
                                onChange={(e) => {
                                    setAccount({
                                        ...account,
                                        password: e.target.value
                                    })
                                }}
                            />
                            <div className="wrapper__sign-btn">
                                <div className="sign-in">
                                    <div
                                        onClick={() => {
                                            login()

                                        }}
                                    >ĐĂNG NHẬP</div>
                                </div>
                                <div className="sign-up">
                                    <div
                                        onClick={() => {
                                            history.push("/signup")
                                        }}
                                    >Chưa có tài khoản? <span>Đăng kí ngay</span></div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}