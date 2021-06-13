import React from 'react';
import ModalUpdate from './ModalUpdate';

export default function Item({ dataVideo, indexNum, getVideo, handleLoading }) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <tr >
                <td className="text-center" style={{ verticalAlign: 'middle' }}>{indexNum}</td>
                <td className="text-center" style={{ verticalAlign: 'middle' }}>{dataVideo?.videoUrl}</td>
                <td className="text-center" style={{ verticalAlign: 'middle' }}>
                    <img alt="" src={dataVideo?.imageCover?.url} style={{ width: 200, height: 'auto' }} />
                </td>
                <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <button id="setting-btn" onClick={() => setModalShow(true)}>
                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                        </svg>
                    </button>
                    <ModalUpdate
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        dataVideo={dataVideo}
                        getVideo={getVideo}
                        handleLoading={handleLoading}
                    />
                    
                </td>
            </tr>
        </>
    )
}