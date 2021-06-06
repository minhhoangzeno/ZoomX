import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doPost } from '../../../../lib/DataSource';

export default function ModalAdd(props) {
    const [lookup, setLookUp] = useState();
    const [fileCover, setFileCover] = useState();

    const handleAdd = async () => {
        props.handleLoading(true);

        let path = "/library/lookup";
        let data = new FormData();
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        data.append("name", lookup.name);
        data.append("imageCover", lookup.imageCover);
        data.append("fileBook", lookup.fileBook);
        
        try {
            let resp = await doPost(path, headers, data);
            if (resp.status === 200) {
                props.handleLoading(false);
                props.getSearch()
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
                        <label className="label-txt">Nhập ten lookup</label> <input className="input-txt"
                            name="name" onChange={(e) => {
                                setLookUp({
                                    ...lookup,
                                    name: e.target.value
                                })
                            }}
                            type="text"
                        />
                    </div>
                    <div>
                        <div>
                            <label>Ảnh Cover:</label> <input id="file-input" type="file"
                                name="imageCover"
                                onChange={(e) => {
                                    setLookUp({
                                        ...lookup,
                                        imageCover: e.target.files[0]
                                    })
                                    setFileCover(URL.createObjectURL(e.target.files[0]))
                                }}
                            />
                        </div>
                        {fileCover ? <div>
                            <img id="target" src={fileCover} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                        </div> : <></>}
                    </div>
                    <div>
                        <label>Chon fileBook</label>
                        <input id="file-input" type="file"
                            name="fileBook"
                            onChange={(e) => {
                                setLookUp({
                                    ...lookup,
                                    fileBook: e.target.files[0]
                                })
                            }}
                        />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                handleAdd()
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