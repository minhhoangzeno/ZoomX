import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPost } from '../../../lib/DataSource';

export default function ModalAdd(props) {
    const [fileCover, setFileCover] = useState();
    const [contact, setContact] = useState({
        title: null,
        label:null,
        imageCover:null
    });
    console.log(contact)
    let handleContact = (e) => {
        const { name, value } = e.target
        setContact({
            ...contact,
            [name]: value
        })
    }

    const addContact = async (contactData) => {
        props.handleLoading(true)
        const path = "/contact";
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("title", contactData?.title);
        data.append("content", contactData?.content)
        data.append("imageCover",contactData?.imageCover)
        data.append("address", contactData?.address)
        data.append("city", contactData?.city)
        data.append("email", contactData?.email)
        data.append("numberPhone", contactData?.numberPhone)
        data.append("timeHotline", contactData?.timeHotline)
        data.append("numberHotline", contactData?.numberHotline)
        try {
            let res = await doPost(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getContact()
            }
    
        } catch (error) {
            props.handleLoading(false)
            console.log(error)
        }
    }
    return (
        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <div className="wrapper__modal">
                    <div>
                        <label className="label-txt">Tiêu đề: </label> <input className="input-txt"
                            name="title" onChange={handleContact}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nội dung: </label> <textarea className="input-txt"
                            name="content" onChange={handleContact}
                            type="text"
                        />
                    </div>
                    <div>
                        <label>Ảnh Cover :</label> <input id="file-input" type="file"
                            name="imageCover"
                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setContact({
                                    ...contact,
                                    imageCover: e.target.files[0]
                                })
                            }}
                        />
                    </div>
                    <div>
                        <img id="target" src={fileCover} style={{ width: 200, height: 'auto' }} alt="" />
                    </div>
                    <div>
                        <label className="label-txt">Địa chỉ: </label> <input className="input-txt"
                            name="address" onChange={handleContact}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Thành phố: </label> <input className="input-txt"
                            name="city" onChange={handleContact}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Số điện thoại: </label> <input className="input-txt"
                            name="numberPhone" onChange={handleContact}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Email: </label> <input className="input-txt"
                            name="email" onChange={handleContact}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Thời gian Hotline: </label> <input className="input-txt"
                            name="timeHotline" onChange={handleContact}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Hotline: </label> <input className="input-txt"
                            name="numberHotline" onChange={handleContact}
                            type="text"
                        />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                addContact(contact)
                                setFileCover(null)
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}