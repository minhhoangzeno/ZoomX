import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doPost } from '../../lib/DataSource';
import '../../style/detail-recruitment.scss';

export default function ModalRecruitment(props) {
    const { address, logo, rank } = props;
    const [user, setUser] = useState();

    const handleUser = (e) => {
        let { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    let addUser = async () => {
        let path = "/person-recruitment";
        let data = new FormData();
        data.append("carreer", rank);
        data.append("addressWork", address);
        data.append("firstName", user?.firstName)
        data.append("lastName", user?.lastName)
        data.append("email", user?.email)
        data.append("numberPhone", user?.numberPhone)
        data.append("fileCv", user?.fileCv);
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        try {
            let resp = await doPost(path, headers, data);
            if (resp.status === 200) {
                alert("Nộp đơn tuyển dụng thành công")
                props.onHide()
            }
        } catch (error) {
            alert("Thất bại. Vui lòng kiểm tra lại thông tin.")
        }
    }
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <div className="modal__recruitment" >
                <div className="container-fluid">
                    <div className="quick--application">
                        <div className="quick--application--title">
                            <strong>NỘP ĐƠN ỨNG TUYỂN</strong>
                        </div>
                        <div className="quick--application--info">
                            <div className="logo">
                                <img src={logo} />
                            </div>
                            <div className="info">
                                <div className="info-left">
                                    <p>Chức danh</p>
                                    <p>Nơi làm việc</p>
                                    <p>Người liên hệ</p>
                                </div>
                                <div className="info-right">
                                    <p><strong>{rank}</strong></p>
                                    <p><strong>{address}</strong></p>
                                    <p><strong>HR ZOOMZ</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="quick--application--form">
                            <div className="title">
                                <strong>THÔNG TIN LIÊN HỆ CỦA BẠN</strong>
                            </div>
                            <div className="form">
                                <form action="post">
                                    <div className="form-item">
                                        <div className="row">
                                            <div className="col-2">
                                                <p>Tên</p>
                                            </div>
                                            <div className="col-10">
                                                <input type="text"
                                                    name="lastName"
                                                    onChange={handleUser}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-item">
                                        <div className="row">
                                            <div className="col-2">
                                                <p>Họ</p>
                                            </div>
                                            <div className="col-10">
                                                <input type="text"
                                                    name="firstName"
                                                    onChange={handleUser}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-item">
                                        <div className="row">
                                            <div className="col-2">
                                                <p>Email</p>
                                            </div>
                                            <div className="col-10">
                                                <input type="email"
                                                    name="email"
                                                    onChange={handleUser}
                                                />
                                                <label htmlFor="email">Vui lòng kiểm tra kỹ email của bạn để nhận được cơ hội nghề nghiệp và tin tức mới nhất từ tập đoàn ZoomX</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-item">
                                        <div className="row">
                                            <div className="col-2">
                                                <p>Số điện thoại</p>
                                            </div>
                                            <div className="col-10">
                                                <input type="text"
                                                    name="numberPhone"
                                                    onChange={handleUser}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="quick--application--file">
                            <div className="title">
                                <strong>HỒ SƠ CỦA BẠN</strong>
                            </div>
                            <div className="file">
                                <div className="row">
                                    <div className="col-2">

                                    </div>
                                    <div className="col-10">
                                        <input type="file" name="file"
                                            onChange={(e) => {
                                                setUser({
                                                    ...user,
                                                    fileCv: e.target.files[0]
                                                })
                                            }}
                                        />
                                        <p>Hỗ trợ định dạng .pdf và thông qua 2MB</p>
                                        <div className="button"><button onClick={() => addUser()}><strong>ỨNG TUYỂN</strong></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}