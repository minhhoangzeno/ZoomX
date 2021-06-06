import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doPut } from '../../../../lib/DataSource';

export default function ModalUpdate(props) {
    const [lookup, setLookUp] = useState(props.data);
    const [fileCover, setFileCover] = useState(props.data.imageCover.url);


    // useEffect( async () => {
    //     await setLookUp(props.data)
    // },[])  // eslint-disable-line react-hooks/exhaustive-deps

    const handleUpdate = async () => {
        props.handleLoading(true);

        let path = `/library/lookup/${props.data._id}`;
        let data = new FormData();
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        data.append("name", lookup.name);
        data.append("imageCover", lookup.imageCover);
        data.append("fileBook", lookup.fileBook);

        try {
            let resp = await doPut(path, headers, data);
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
                            value={lookup?.name}
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
                                handleUpdate()
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