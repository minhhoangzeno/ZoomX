import React from 'react';
import { doDelete, doPut } from '../../../lib/DataSource';
import ModalUpdate from './ModalUpdate';
export default function Item({ dataInvestment, indexNum, getInvestment, handleLoading }) {
    const [modalShow, setModalShow] = React.useState(false);
    const deleteInvestment = async (investment_id) => {
        handleLoading(true)
        const path = `/investment/remove/${investment_id}`;
        try {
            let resp = await doDelete(path);
            if (resp.status === 200) {
                handleLoading(false)
                getInvestment()
            }
        } catch (error) {
            console.log("1");
            handleLoading(false)
        }
    }
    const handleDeleteInvestment = async () => {
        const path = `/investment/delete/${dataInvestment._id}`;
        try {
            let resp = await doPut(path);
            if (resp.status === 200) {
                console.log("delete ok")
                handleLoading(false)
                getInvestment()
            }
        } catch (error) {
            console.log(error);
            handleLoading(false)
        }

    }
    const handleSetInvestment = async () => {
        const path = `/investment/set/${dataInvestment._id}`;
        try {
            let resp = await doPut(path);
            if (resp.status === 200) {
                handleLoading(false)
                console.log("set ok")
                getInvestment()
            }
        } catch (error) {
            console.log(error);
            handleLoading(false)
        }
    }
    return (
        <>
            <tr >
                <td className="text-center" style={{ verticalAlign: 'middle' }}>{indexNum}</td>
                <td className="text-center" style={{ verticalAlign: 'middle' }}>{dataInvestment?.investmentName}</td>
                <td className="text-center" style={{ verticalAlign: 'middle' }}>{dataInvestment?.description}</td>
                <td className="text-center" style={{ verticalAlign: 'middle' }}>
                    <img alt="" src={dataInvestment?.imageCover?.url} style={{ width: 50, height: 'auto' }} />
                </td>
                <td className="text-center">
                    <div>
                        <input type="radio"  onChange={() => handleSetInvestment()} name={dataInvestment._id} checked={(dataInvestment.isDeleted) ? false : true} /> Hoạt động
                    </div>
                    <div>
                        <input type="radio"  onChange={() => handleDeleteInvestment()} name={dataInvestment._id} checked={(dataInvestment.isDeleted) ? true : false} /> Không Hoạt động
                    </div>
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
                        dataInvestment={dataInvestment}
                        getInvestment={getInvestment}
                        handleLoading={handleLoading}
                    />
                    <button onClick={() => deleteInvestment(dataInvestment._id)}>
                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                        </svg>
                    </button>
                </td>
            </tr>
        </>
    )
}