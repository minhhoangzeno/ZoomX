import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doGet, doPut } from '../../../../lib/DataSource';

export default function ModalUpdate(props) {
    let pj = [];
    props.data?.imageList.map(item => {
        pj.push(item.url)
        return pj;
    })
    const [image, setImage] = useState();
    const [fileCover, setFileCover] = useState();
    const [fileList, setFileList] = useState();
    useEffect(() => {
        getLibraryImage()
    }, [])
    useEffect(() => {
        getLibraryImage()
    }, [image?._id])
    const getLibraryImage = async () => {
        let path = `/library/image/${props.data._id}`;
        try {
            let resp = await doGet(path);
            if (resp.status === 200) {
                setImage(resp.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleUpdate = async () => {
        props.handleLoading(true);

        let path = `/library/image/${props.data._id}`;
        let data = new FormData();
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        data.append("name", image.name);
        data.append("imageCover", image.imageCover);
        let listPj = Array.from(image.imageList)
        for (let i = 0; i < listPj.length; i++) {
            data.append("imageList", listPj[i]);
        }

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
    let handleFileList = (e) => {
        let image = [];
        image.push(e.target.files);
        let listImage = []
        for (let i = 0; i < image[0].length; i++) {
            listImage.push(URL.createObjectURL(image[0][i]))
        }
        setFileList(listImage)
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
                        <label className="label-txt">Nhập ten thu vien</label> <input className="input-txt"
                            name="name" onChange={(e) => {
                                setImage({
                                    ...image,
                                    name: e.target.value
                                })
                            }}
                            value={image?.name}
                            type="text"
                        />
                    </div>
                    <div>
                        <div>
                            <label>Ảnh Cover:</label> <input id="file-input" type="file"
                                name="imageCover"
                                onChange={(e) => {
                                    setImage({
                                        ...image,
                                        imageCover: e.target.files[0]
                                    })
                                    setFileCover(URL.createObjectURL(e.target.files[0]))
                                }}
                            />
                        </div>
                        {fileCover ? <div>
                            <img id="target" src={fileCover} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                        </div> : <img id="target" src={image?.imageCover.url} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                        }
                    </div>
                    <div>
                        <label>Ảnh List:</label> <input id="file-input" type="file"
                            name="imageYoung"
                            onChange={(e) => {
                                setImage({
                                    ...image,
                                    imageList: e.target.files
                                })
                                handleFileList(e)
                            }}
                            multiple
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        {(fileList) ? fileList?.map((item, idx) => {
                            return (
                                <div key={idx} style={{ margin: 10 }}>
                                    <img id="target" src={item} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                                </div>
                            )
                        }) : image?.imageList?.map((item, idx) => {
                            return (
                                <div key={idx} style={{ margin: 10 }}>
                                    <img id="target" src={item?.url} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                handleUpdate()
                                setFileCover(null)
                                setFileList(null)
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}