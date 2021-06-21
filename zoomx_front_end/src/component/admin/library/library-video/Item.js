import React, { useState } from 'react';
import { doDelete } from '../../../../lib/DataSource';
import { convertToEmbed } from '../../../../utils/RegexUrl';
import ModalUpdate from './ModalUpdate';
export default function Item({ data, indexNum, getSearch, handleLoading }) {
    const [modalShow, setModalShow] = useState(false);

    const handleDelete = async () => {
        handleLoading(true)
        const path = `/library/video/${data._id}`;
        try {
            let resp = await doDelete(path);
            if (resp.status === 200) {
                handleLoading(false)
                getSearch()
            }
        } catch (error) {
            handleLoading(false)
        }
    }

    return (
        <>
            <tr >
                <td className="text-center" style={{ verticalAlign: 'middle' }}>{indexNum}</td>
                <td className="text-center" style={{ verticalAlign: 'middle' }}>{data.name}</td>
                <td className="text-center" style={{ verticalAlign: 'middle' }}>
                    {/* <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/LfaoNpJjy78`}
                        frameBorder="0" allowFullScreen></iframe> */}

                    {convertToEmbed(data?.videoUrl) && <>
                        <iframe title="A" width="400" height="300" src={`https://www.youtube.com/embed/${convertToEmbed(data?.videoUrl)}`}
                            frameBorder="0" allowFullScreen></iframe>

                    </>}
                </td>
                <ModalUpdate
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    data={data}
                    getSearch={getSearch}
                    handleLoading={handleLoading}
                />
                <td style={{ verticalAlign: 'middle' }} className="btn__setting">
                    <button id="setting-btn" onClick={() => setModalShow(true)}>
                    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24" color="#00a6d9">
                        <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12H20A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4V2M18.78,3C18.61,3 18.43,3.07 18.3,3.2L17.08,4.41L19.58,6.91L20.8,5.7C21.06,5.44 21.06,5 20.8,4.75L19.25,3.2C19.12,3.07 18.95,3 18.78,3M16.37,5.12L9,12.5V15H11.5L18.87,7.62L16.37,5.12Z" />
                    </svg>
                    </button>
                    <button onClick={() => handleDelete()}>
                    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24" color="#65676b">
                        <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                    </svg>
                    </button>
                </td>
            </tr>
        </>
    )
}