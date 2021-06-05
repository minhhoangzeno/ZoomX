import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPut } from '../../../../lib/DataSource';

export default function ModalUpdate(props) {
    const { dataPartner } = props;
    const [partner, setPartner] = useState(dataPartner);
    const [fileCover, setFileCover] = useState(dataPartner.logo.url);

    let handlePartner = (event) => {
        const { name, value } = event.target
        setPartner({
            ...partner,
            [name]: value
        })
    }


    const updatePartner = async (partnerData, partner_id) => {
        props.handleLoading(true);
        const path = `/partner/${partner_id}`;
        const headers = {
            Accept: "*/*",
            "Content-Type": "multipart/form-data"
        }
        let data = new FormData();
        data.append("name", partnerData.name);
        data.append("logo", partnerData.logo);
        try {
            let resp = await doPut(path, headers, data);
            if (resp.status === 200) {
                props.handleLoading(false);
                props.getPartner()
            }
        } catch (error) {
            console.log(error)
            props.handleLoading(false);
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
                        <label className="label-txt">Tên đối tác: </label> <input className="input-txt"
                            name="name" onChange={handlePartner}
                            type="text"
                            value={partner.name}
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
                        <img id="target" src={fileCover}
                            value={partner.logo.url}
                            style={{ width: 200, height: 'auto' }} alt="" />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={async () => {
                                await updatePartner(partner,partner._id)
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