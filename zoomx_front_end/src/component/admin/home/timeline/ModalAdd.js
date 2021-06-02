import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPost } from '../../../../lib/DataSource';

export default function ModalAdd(props) {
    const [timeline, setTimeline] = useState({
        content: null,
        label:null
    });
    console.log(timeline)
    let handleTimeline = (e) => {
        const { name, value } = e.target
        setTimeline({
            ...timeline,
            [name]: value
        })
    }

    const addTimeline = async (timelineData) => {
        props.handleLoading(true)
        const path = "/timeline";
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("content", timelineData?.content);
        data.append("label", timelineData?.label)
        try {
            let res = await doPost(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getTimeline()
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
                        <label className="label-txt">Label: </label> <input className="input-txt"
                            name="label" onChange={handleTimeline}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="label-txt">Content: </label> <input className="input-txt"
                            name="content" onChange={handleTimeline}
                            type="text"
                        />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                addTimeline(timeline)
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}