import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPut } from '../../../../lib/DataSource';

export default function ModalUpdate(props) {
    const [timeline, setTimeline] = useState(props.dataTimeline);
    
    let handleTimeline = (e) => {
        const { name, value } = e.target
        setTimeline({
            ...timeline,
            [name]: value
        })
    }

    const updateTimeline = async (timelineData) => {
        props.handleLoading(true)
        const path = `/timeline/${timelineData._id}`;

        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("content", timelineData?.content);
        data.append("label", timelineData?.label)
        try {
            let res = await doPut(path, headers, data)
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
                            value={timeline.label}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nội dung: </label> <textarea className="input-txt"
                            name="content" onChange={handleTimeline}
                            type="text"
                            value={timeline.content}
                        />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                updateTimeline(timeline)
                               
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}