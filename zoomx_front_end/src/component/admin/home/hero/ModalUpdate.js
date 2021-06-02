import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPut } from '../../../../lib/DataSource';

export default function ModalUpdate(props) {
    const [fileCover, setFileCover] = useState(props.dataHero.imageCover.url);
    const [hero, setHero] = useState(props.dataHero);
    
    let handleHero = (e) => {
        const { name, value } = e.target
        setHero({
            ...hero,
            [name]: value
        })
    }
    console.log(typeof(hero.imageCover))
    const updateHero = async (heroData) => {
        props.handleLoading(true)
        const path = `/hero/${heroData._id}`;
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("title", heroData?.title);
        data.append("label", heroData?.label)
        data.append("imageCover",heroData?.imageCover)
        try {
            let res = await doPut(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getHero()
            
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
                        <label className="label-txt">Title: </label> <input className="input-txt"
                            name="title" onChange={handleHero}
                            type="text"
                            value={hero.title}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Label: </label> <input className="input-txt"
                            name="label" onChange={handleHero}
                            type="text"
                            value={hero.label}
                        />
                    </div>
                    <div>
                        <label>Ảnh :</label> <input id="file-input" type="file"
                            name="imageCover"
                            onChange={(e) => {
                                setFileCover(URL.createObjectURL(e.target.files[0]))
                                setHero({
                                    ...hero,
                                    imageCover: e.target.files[0]
                                })
                            }}
                        />
                    </div>
                    <div>
                        <img id="target" src={fileCover} style={{ width: 200, height: 'auto' }} alt="" />
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                updateHero(hero)
                               
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}