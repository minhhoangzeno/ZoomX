import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doPost } from '../../../../lib/DataSource';

export default function ModalAdd(props) {
    const [name,setName] = useState();
    const handleAdd = async () => {
        props.handleLoading(true);

        let path = "/categoryblog";
        let data = new FormData();
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        data.append("name",name);
        try {
            let resp = await doPost(path,headers,data);
            if(resp.status === 200){
                props.handleLoading(false);
                props.getData()
            }
        } catch (error) {
            props.handleLoading(false);
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
                        <label className="label-txt">Nhập danh muc bai viet </label> <input className="input-txt"
                            name="name" onChange={(e) => {
                                setName(e.target.value)
                            }}
                            type="text"
                        />
                    </div>
                   
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                handleAdd()
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}