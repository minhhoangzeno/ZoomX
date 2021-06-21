import React, { useEffect, useState } from 'react';
import '../../style/recruitment.scss';
import RecruitmentItem from './RecruitmentItem';
import Pagination from "react-js-pagination";
import { doGet } from '../../lib/DataSource';
import Loading from '../image/Loading';

export default function Recruitment() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [activePage, setActivePage] = useState(1);
    useEffect(() => {
        getSearch()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        getSearch()
    }, [activePage]) // eslint-disable-line react-hooks/exhaustive-deps
    const getSearch = async () => {
        setLoading(true)
        let path = `/recruitment?page=${activePage}`;
        try {
            let resp = await doGet(path);
            if (resp.status === 200) {
                setData(resp.data)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
  
    return (
        <>
            <div className="recruitment">
                <div className="container-fluid">
                    <div className="recruitment__list">
                        <div className="row">
                            {!loading ?
                                data?.data?.map((item, index) => {
                                    return (
                                        <RecruitmentItem data={item} key={index} />
                                    )
                                }) :
                                <Loading />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper-paginate">
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={6}
                    totalItemsCount={parseInt(data?.totalPage)}
                    pageRangeDisplayed={3}
                    onChange={(item) => setActivePage(item)}
                />
            </div>
        </>
    )
}