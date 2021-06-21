import React, {  useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPost } from '../../../../lib/DataSource';

export default function ModalAdd(props) {
    const [fileCover, setFileCover] = useState();
    const [partner, setPartner] = useState();
    let handlePartner = (event) => {
        const { name, value } = event.target
        setPartner({
            ...partner,
            [name]: value
        })
    }

    const addPartner = async (partnerData) => {
        props.handleLoading(true)
        const path = "/partner";
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("name", partnerData?.name);
        data.append("logo", partnerData?.logo)
        try {
            let res = await doPost(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getPartner()
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
                        <label className="label-txt">Nhập tên đối tác: </label> <input className="input-txt"
                            name="name" onChange={handlePartner}
                            type="text"
                        />
                    </div>
                    
                    <div>
                        <label>Logo:</label> <input id="file-input" type="file"
                            name="logo"
                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setPartner({
                                    ...partner,
                                    logo: e.target.files[0]
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
                                addPartner(partner)
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