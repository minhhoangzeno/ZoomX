import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPut } from '../../../../lib/DataSource';

export default function ModalUpdate(props) {
    const [fileCover, setFileCover] = useState(props.dataDefineHome.imageCover.url);
    const [define_home, setDefineHome] = useState(props.dataDefineHome);
    
    let handleDefineHome = (e) => {
        const { name, value } = e.target
        setDefineHome({
            ...define_home,
            [name]: value
        })
    }

    const updateDefineHome = async (define_homeData) => {
        props.handleLoading(true)
        const path = `/define-home/${define_homeData._id}`;
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("title", define_homeData?.title);
        data.append("content", define_homeData?.content)
        data.append("imageCover",define_homeData?.imageCover)
        try {
            let res = await doPut(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getDefineHome()
                console.log("1")
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
                            name="title" onChange={handleDefineHome}
                            type="text"
                            value={define_home.title}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nội dung: </label> <textarea className="input-txt"
                            name="content" onChange={handleDefineHome}
                            type="text"
                            value={define_home.content}
                        />
                    </div>
                    <div>
                        <label>Ảnh :</label> <input id="file-input" type="file"
                            name="imageCover"
                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setDefineHome({
                                    ...define_home,
                                    imageCover: e.target.files[0]
                                })
                            }}
                        />
                    </div>
                    <div>
                        <img id="target" src={fileCover} style={{ width: 200, height: 'auto' }} alt="" />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                updateDefineHome(define_home)
                               
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}