import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPut } from '../../../../lib/DataSource';

export default function ModalUpdate(props) {
    const { data } = props;
    const [setting, setSetting] = useState(data);

    let handleSetting = (event) => {
        const { name, value } = event.target
        setSetting({
            ...setting,
            [name]: value
        })
    }


    const updateSetting = async () => {
        props.handleLoading(true);
        const path = `/setting/${setting._id}`;
        const headers = {
            Accept: "*/*",
            "Content-Type": "multipart/form-data"
        }
        let data = new FormData();
        data.append("phone", setting.phone);
        data.append("mail", setting.mail);
        try {
            let resp = await doPut(path, headers, data);
            if (resp.status === 200) {
                props.handleLoading(false);
                props.getSearch()
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
                        <label className="label-txt">So dien thoai </label> <input className="input-txt"
                            name="phone" onChange={handleSetting}
                            type="text"
                            value={setting.phone}
                        />
                    </div>

                    <div>
                        <label className="label-txt">Mail </label> <input className="input-txt"
                            name="mail" onChange={handleSetting}
                            type="text"
                            value={setting.mail}
                        />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={async () => {
                                await updateSetting()
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}