import React from 'react';
import Img from '../../image/investment/img.png';
import { useHistory } from 'react-router-dom';
import InvestmentItem from './InvestmentItem';
export default function Investment({ data }) {
    let history = useHistory();
    return (
        <>
            <div className="investment-wrapper">
                <div className="container-fluid">
                    {data?.map((item, index) => {
                        return (
                            <InvestmentItem data={item} key={index} indexNum={index + 1} />
                        )
                    })}


                </div>
            </div>
        </>
    )
}
