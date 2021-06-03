import React, {  useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPut } from '../../../../lib/DataSource';

export default function ModalUpdate(props) {
    const [slogan, setSlogan] = useState(props.dataSlogan);
    
    let handleSlogan = (e) => {
        const { name, value } = e.target
        setSlogan({
            ...slogan,
            [name]: value
        })
    }

    const updateSlogan = async (sloganData) => {
        props.handleLoading(true)
        const path = `/slogan/${sloganData._id}`;

        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("content", sloganData?.content);
        data.append("author", sloganData?.author)
        data.append("career", sloganData?.career)
        try {
            let res = await doPut(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getSlogan()
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
                        <label className="label-txt">Trích dẫn: </label> <input className="input-txt"
                            name="content" onChange={handleSlogan}
                            type="text"
                            value={slogan.content}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Tác giả: </label> <input className="input-txt"
                            name="author" onChange={handleSlogan}
                            type="text"
                            value={slogan.author}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Chức danh: </label> <input className="input-txt"
                            name="career" onChange={handleSlogan}
                            type="text"
                            value={slogan.career}
                        />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                updateSlogan(slogan)
                               
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}