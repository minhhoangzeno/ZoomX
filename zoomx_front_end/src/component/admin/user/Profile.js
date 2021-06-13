import React, { useEffect, useState } from 'react';
import { doPut } from '../../../lib/DataSource';

export default function Profile() {
    const [user, setUser] = useState();
    const [fileCover, setFileCover] = useState();

    useEffect(() => {
        async function fetchData() {
            const userLocal = await JSON.parse(localStorage.getItem("user"))
            setUser(userLocal)
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
                alert("Update thanh cong")
                localStorage.setItem("user",JSON.stringify(resp.data))
            }
        } catch (error) {
         
        }
    }
    return (
        <>
            <label>Tài khoản cá nhân </label>
            <div>{user?.username}</div>
            <label>Tên hiển thị</label>
            <input type="text" value={user?.displayName}
                onChange={handleUser}
                name="displayName"
            />
            <label>Mat khau</label>
            <input type="text" 
                onChange={handleUser}
                name="password"
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
            <div className="sign-up">
                <div onClick={updateUser}>ĐĂNG KÍ</div>
            </div>
        </>
    )
}