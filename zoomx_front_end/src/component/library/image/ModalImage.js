import React from 'react';
import item from '../../../image/home/librarypage/itemOfList.jpg';
import Modal from 'react-bootstrap/Modal'
export default function ModalImage(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div>
                    <div onClick={props.onHide}
                    style={{position:'fixed',top:'3%',right:'3%',color:'#FFF'}}
                    >
                        <svg style={{width:40,height:40}} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                        </svg>
                    </div>
                    <div>
                        <img src={item} alt="" />
                    </div>
                </div>
            </Modal>
        </>
    )
}