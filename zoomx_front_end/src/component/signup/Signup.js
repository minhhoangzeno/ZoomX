import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { doPost } from '../../lib/DataSource';
export default function Signup() {
    const [user, setUser] = useState();
    const [fileCover, setFileCover] = useState();
    let history = useHistory();
    const [error, setError] = useState()
    let addUser = async () => {
        let path = "/user";
        let data = new FormData();
        data.append("displayName", user?.displayName);
        data.append("username", user?.username);
        data.append("password", user?.password);
        data.append("avatar", user?.avatar);
        data.append("isAdmin", false)
        const headers = {
            "Content-Type": "multipart/form-data"
        };
        try {
            let resp = await doPost(path, headers, data);
            if (resp.status === 200) {
                localStorage.setItem("user", JSON.stringify(resp.data))
                history.push("/admin")
            }
        } catch (error) {
            setError(error)
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
            <div className="wrapper__signup">
                <div className="main__signup">
                    <div className="wrapper__sign">
                        <div className="title">
                            <h1>Sign up</h1>
                        </div>
                        <label>Ten hien thi</label>
                        <input type="text" name="displayName" placeholder="Display name"
                            onChange={handleUser}
                        />
                        <label>avatar</label>
                        <input type="file"
                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setUser({
                                    ...user,
                                    avatar: e.target.files[0]
                                })
                            }}

                        />
                        {fileCover ? <div>
                            <img id="target" src={fileCover} style={{ width: 200, height: 'auto' }} alt="" />
                        </div> : <></>}

                        <input className="mail-btn" placeholder="Email address"
                            name="username"
                            onChange={handleUser}
                        />
                        <input className="pw-btn" placeholder="Password"
                            onChange={handleUser}
                        />
                        <div className="wrapper__sign-btn">
                            <div className="sign-up">
                                <div onClick={addUser}>ĐĂNG KÍ</div>
                            </div>
                        </div>
                        {error ? <div>Vui long nhap lai thong tin!</div> : <></>}
                    </div>
                </div>
            </div>
        </>
    )
}