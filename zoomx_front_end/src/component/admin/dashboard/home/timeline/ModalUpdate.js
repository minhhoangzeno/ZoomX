import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPut } from '../../../../../lib/DataSource';

export default function ModalUpdate(props) {
    const { dataTimeline } = props;
    const [timeline, setTimeline] = useState(dataTimeline);

    let handleTimeline = (event) => {
        const { name, value } = event.target
        setTimeline({
            ...timeline,
            [name]: value
        })
    }


    const updateTimeline = async (timelineData, timeline_id) => {
        props.handleLoading(true);
        const path = `/timeline/${timeline_id}`;
        const headers = {
            Accept: "*/*",
            "Content-Type": "multipart/form-data"
        }
        let data = new FormData();
        data.append("label", timelineData.label);
        data.append("content", timelineData.content);
        try {
            let resp = await doPut(path, headers, data);
            if (resp.status === 200) {
                props.handleLoading(false);
                props.getTimeline()
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
                        <label className="label-txt">Label: </label> <input className="input-txt"
                            name="label" onChange={handleTimeline}
                            type="text"
                            value={timeline.label}
                        />
                    </div>

                    <div>
                        <label className="label-txt">Content: </label> <input className="input-txt"
                            name="content" onChange={handleTimeline}
                            type="text"
                            value={timeline.content}
                        />
                    </div>
                    
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={async () => {
                                await updateTimeline(timeline,timeline._id)
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}