import React, { useEffect, useState } from 'react';
import { doGet } from '../../../lib/DataSource';
export default function SelectInvestment({ handleInvestment }) {
    const [investment, setInvestment] = useState();
    useEffect(() => {
        getInvestment()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    const getInvestment = async () => {
        const path = "/investment-all";
        const headers = {
            Accept: "*/*"
        }
        try {
            var resp = await doGet(path, headers);
            if (resp.status === 200) {
                setInvestment(resp.data)

            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <label htmlFor="cars">Chọn lĩnh vực đầu tư:</label>
            <select name="cars" id="cars" onChange={(e) => handleInvestment(e.target.value)} style={{
                border: '1px solid #eaeaea'
                , padding: 10,
                marginTop: 15,
                marginBottom: 15
            }}>
                <option value="1">Tất cả</option>
                {investment?.map((item, idx) => {
                    return (
                        <option key={idx} value={item._id}>{item.investmentName}</option>
                    )
                })}
            </select>
        </>
    )
}