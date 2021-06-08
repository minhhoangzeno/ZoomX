import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function ModalDetail(props) {
    let pj = [];
    props.data?.imageYoung.map(item => {
        pj.push(item.url)
        return pj;
    })
    let fileImageYoung = pj;
   
   
    return (
        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <div className="wrapper__modal">
                    <div>
                        <label className="label-txt">Tiêu đề: </label> <input className="input-txt"
                            name="title" 
                            type="text"
                            value={props?.data?.title}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nội dung: </label> <textarea className="input-txt"
                            name="content" 
                            type="text"
                            value={props?.data?.content}
                        />
                    </div>
                    <div>
                        <label>Ảnh :</label> 
                    </div>
                    <div style={{ display: 'flex' }}>
                        {fileImageYoung?.map((item,idx) => {
                            return (
                                <div key={idx} style={{ margin: 10 }}>
                                    <img id="target" src={item} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}