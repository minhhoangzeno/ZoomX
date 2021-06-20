import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { doPost } from '../../lib/DataSource';
import Loading from '../image/Loading';
import { useForm } from 'react-hook-form';
export default function DemoSignUp() {
    const [user, setUser] = useState();
    const [fileCover, setFileCover] = useState();
    const [loading, setLoading] = useState(false)
    let history = useHistory();
    useEffect(() => {
        localStorage.removeItem("user")
    }, [])
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
            let resp = await doPost(path, headers, data);
            if (resp.status === 200) {
                let message = window.confirm("Đăng ký thành công, vui lòng chờ admin duyêt. Bạn có muốn quay về trang chủ?");
                if (message) {
                    history.push("/")
                    setLoading(false)
                }

            }
        } catch (error) {
            setLoading(false)
            alert("Vui lòng kiểm tra lại thông tin đăng ký!")

        }
    }

    const handleUser = (e) => {
        let { value, name } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    console.log(user)
    return (
        <>

            <div className="sign__up">
                {!loading ?
                    <div className="form__signup">
                        <label>
                            Tài khoản
                            <input name="username" onChange={handleUser} />
                        </label>
                        <label>
                            Mật khẩu
                            <input name="password" onChange={handleUser} />
                        </label>
                        <label>
                            Tên hiển thị
                            <input name="displayName" onChange={handleUser} />
                        </label>
                        <label>
                            Avatar
                            <input type="file"
                                onChange={(e) => {
                                    setFileCover(URL.createObjectURL(e.target.files[0]))
                                    setUser({
                                        ...user,
                                        avatar: e.target.files[0]
                                    })
                                }}
                                name="avatar"
                            />
                            {fileCover ? <div className="cover-img">
                                <img id="target" src={fileCover} style={{ width: 200, height: 'auto' }} alt="" />
                            </div> : <></>}
                        </label>
                        <button className="ipt__sumbit" onClick={addUser}>Đăng ký</button>
                    </div> : <Loading />
                }
            </div>
        </>
    )
}

