import React from 'react';
import { doGet } from '../../../../lib/DataSource';
export default function Item({ data, indexNum, handleLoading, getData }) {
    const handleDelete = async () => {
        handleLoading(true)
        const path = `/categoryblog/delete/${data._id}`;
        try {
            let resp = await doGet(path);
            if (resp.status === 200) {
                handleLoading(false)
                getData()
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

                <td style={{ display: 'flex', justifyContent: 'space-around' }}>

                    <button onClick={() => handleDelete()}>
                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                        </svg>
                    </button>
                </td>
            </tr>
        </>
    )
}