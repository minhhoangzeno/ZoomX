import React, { useEffect, useState } from 'react';
import { doPut } from '../../../lib/DataSource';
import Loading from '../../image/Loading';

export default function Profile() {
    const [user, setUser] = useState();
    const [fileCover, setFileCover] = useState();
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const userLocal = await JSON.parse(localStorage.getItem("user"))
            setUser(userLocal)
            setFileCover(userLocal?.avatar?.url)
        }
        fetchData()
    }, []);
    let handleUser = (e) => {
        let { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    let updateUser = async () => {
        setLoading(true)
        let path = `/user/${user?._id}`;
        let data = new FormData();
        data.append("displayName", user?.displayName);
        data.append("password", user?.password);
        data.append("avatar", user?.avatar);
        const headers = {
            "Content-Type": "multipart/form-data"
        };
        try {
            let resp = await doPut(path, headers, data);
            if (resp.status === 200) {
                localStorage.setItem("user", JSON.stringify(resp.data))
                setLoading(false)
                alert("Sửa tài khoản thành công!")
            }
        } catch (error) {
            setLoading(false)
        }
    }
    return (
        <>
            <div className="wrapper__signup">
                <div className="main__signup">
                    {loading ? <Loading /> :


                        <div className="wrapper__sign">
                            <div className="title">
                                <h1>Tài khoản cá nhân</h1>
                            </div>
                            <form>
                                <label>Tên hiển thị</label>
                                <input type="text" name="displayName" placeholder="Tên hiển thị"
                                    onChange={handleUser}
                                    value={user?.displayName}
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
                                <label>Tên đăng nhập</label>

                                <input className="nameUser-btn" placeholder="Tên đăng nhập"
                                    name="username"
                                    value={user?.username}
                                />
                                <div className="pw-wrapper">
                                    <label>Mật khẩu</label>

                                    <input className="pw-btn" placeholder="Mật khẩu mới" type="password"
                                        onChange={handleUser}
                                    />
                                </div>

                                <div className="wrapper__sign-btn">
                                    <div className="sign-up">
                                        <div onClick={updateUser}>XÁC NHẬN</div>
                                    </div>
                                </div>
                            </form>


                        </div>
                    }
                </div>
            </div>
        </>
    )
}