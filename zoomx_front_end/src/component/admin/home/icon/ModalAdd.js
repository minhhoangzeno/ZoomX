import React, {  useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPost } from '../../../../lib/DataSource';

export default function ModalAdd(props) {
    const [fileCover, setFileCover] = useState();
    const [icon, setIcon] = useState();
    let handleIcon = (event) => {
        const { name, value } = event.target
        setIcon({
            ...icon,
            [name]: value
        })
    }

    const addIcon = async () => {
        props.handleLoading(true)
        const path = "/icon";
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("url", icon?.url);
        data.append("imageCover", icon?.imageCover)
        try {
            let res = await doPost(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getSearch()
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
                        <label className="label-txt">Nhập url: </label> <input className="input-txt"
                            name="url" onChange={handleIcon}
                            type="text"
                        />
                    </div>
                    
                    <div>
                        <label>Anh:</label> <input id="file-input" type="file"
                            name="imageCover"
                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setIcon({
                                    ...icon,
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
                                addIcon()
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