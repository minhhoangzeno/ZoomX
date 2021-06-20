import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { doPost } from '../../lib/DataSource';

import Loading from '../image/Loading';

export default function Signup() {
    const [user, setUser] = useState();
    const [fileCover, setFileCover] = useState();
    let history = useHistory();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState()
    useEffect(() => {
        localStorage.removeItem("user")
    },[])
    let addUser = async () => {
        setLoading(true)
        let path = "/user";
        let data = new FormData();
        data.append("displayName", user?.displayName);
        data.append("username", user?.username);
        data.append("password", user?.password);
        data.append("avatar", user?.avatar);
        data.append("isAdmin", 'Member')
        const headers = {
            Accept: "*/*"
        }
        try {
            let resp = await doPost(path,headers, data);
            if (resp.status === 200) {
                alert("Bạn đã đăng ký tài khoản thành công! Vui lòng chờ admin chấp nhận.")
                history.push("/")
                setLoading(false)

            }
        } catch (error) {
            setError(error)
            setLoading(false)

        }
    }
    
    const handleUser = (e) => {
        let { value, name } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    return (
        <>
            <div className="wrapper__signup" style={{ width: '100vw', height: '100vh' }}>
                {loading ? <Loading /> :

                    <div className="main__signup">
                        <div className="wrapper__sign">
                            <div className="title">
                                <h1>ĐĂNG KÝ</h1>
                            </div>
                            <form>
                                <input type="text" name="displayName" placeholder="Tên hiển thị"
                                    onChange={handleUser}
                                />
                                <div className="set-avatar">
                                    <label>Ảnh đại diện</label>
                                    <input type="file"
                                        onChange={(e) => {
                                            setFileCover(URL.createObjectURL(e.target.files[0]))
                                            setUser({
                                                ...user,
                                                avatar: e.target.files[0]
                                            })
                                        }}
                                    />
                                </div>

                                {fileCover ? <div className="cover-img">
                                    <img id="target" src={fileCover} style={{ width: 200, height: 'auto' }} alt="" />
                                </div> : <></>}

                                <input className="nameUser-btn" placeholder="Tên đăng nhập"
                                    name="username"
                                    onChange={handleUser}
                                />
                                <div className="pw-wrapper">
                                    <input className="pw-btn" placeholder="Mật khẩu" type="text"
                                        onChange={handleUser}
                                    />
                                </div>

                                <div className="wrapper__sign-btn">
                                    <div className="sign-up">
                                        <div onClick={addUser}>XÁC NHẬN</div>
                                    </div>
                                </div>
                            </form>

                            {error ? <div>Vui long nhap lai thong tin!</div> : <></>}
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

