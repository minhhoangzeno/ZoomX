import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import { doGet } from '../../lib/DataSource';
import Loading from '../image/Loading';
import Item from './Item';
import MenuProject from './MenuProject';
export default function Project() {
    const [investmentId, setInvestmentId] = useState("60bf768b5210df341c80c0ef");
    const [data, setData] = useState();
    const [activePage, setActivePage] = useState(1);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getSearch()
    }, [investmentId, activePage])
    const getSearch = async () => {
        setLoading(true)
        let path = `/project?page=${activePage}&typeInvestment=${investmentId}`;
        try {
            let resp = await doGet(path);
            if (resp.status === 200) {
                setData(resp.data)
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    const handleInvestment = (id) => {
        setInvestmentId(id)
        setActivePage(1)
    }
    const handleChangData = (item) => {
        setActivePage(item)
    }
    return (
        <>
            <MenuProject handleInvestment={handleInvestment} investmentId={investmentId} />
            <div className="list__wrapper-project">
                <div className="container-fluid">
                    {!loading ?
                        <div className="row wrapper__item">
                            {data?.data.map((item, idx) => {
                                return (
                                    <Item data={item} />
                                )
                            })}

                        </div> :
                        <Loading />    
                }
                </div>
            </div>
            <div className="wrapper-paginate">
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={6}
                    totalItemsCount={parseInt(data?.totalPage)}
                    pageRangeDisplayed={3}
                    onChange={handleChangData}
                />
            </div>

        </>
    )
}