import React, { useEffect, useState } from 'react';
import { doGet } from '../../lib/DataSource';
import Item from './Item';

export default function Investment( ) {
    const [data, setData] = useState(null); //tao 1 state data
   
    useEffect(() => {
        getInvestment()
    }, []); //vua vao page se chay luon

    async function getInvestment() {
        const path = "/investment";
        const headers = {
            Accept: "*/*"
        }
        try {
            var resp = await doGet(path, headers);
            if (resp.status === 200) {
              
                setData(resp.data)
            }
        } catch (e) {
          
        }
    }
    
    return (
        <>
            <div className="investment-wrapper">
                <div className="container-fluid">
                    {data?.map((item, index) => {
                        return (
                            <Item data={item} index={index + 1} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
