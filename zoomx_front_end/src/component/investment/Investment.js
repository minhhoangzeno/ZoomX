import React from 'react';
import Img from '../../image/investment/img.png';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { doGet } from '../../lib/DataSource';
import Item from './Item'
import { useHeroInvestment } from '../../lib/API';

export default function Investment() {
    let history = useHistory();
    const [data, setData] = useState(null); //tao 1 state data
    const [error, setError] = useState(null); //tao 1 state error
    const [loading, setLoading] = useState(false) //state loading
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
                setLoading(false)
                setData(resp.data)
            }
        } catch (e) {
            setError(e)
            setLoading(true)
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
