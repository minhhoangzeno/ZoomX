import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import { useHistory } from 'react-router';
import { doGet } from '../../../lib/DataSource';
import Loading from '../../image/Loading';
import Item from './Item';

import SelectInvestment from './SelectInvestment';
export default function Project() {
    const [data, setData] = useState();
    let history = useHistory();
    const [activePage, setActivePage] = useState(1);
    const [investmentId, setInvestmentId] = useState(1);
    const [loading, setLoading] = useState(false);
    const handleLoading = (isLoading) => {
        setLoading(isLoading)
    }
    const handleInvestment = (id) => {
        setInvestmentId(id)
        setActivePage(1)
    }
    useEffect(() => {
        getSearch()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        getSearch()
    },[investmentId,activePage])
    const getSearch = async () => {
        handleLoading(true)
        let path = `/project?page=${activePage}&typeInvestment=${investmentId}`;
        try {
            let resp = await doGet(path);
            if (resp.status === 200) {
                setData(resp.data)
                handleLoading(false)
            }
        } catch (error) {
            console.log(error);
            handleLoading(false)
        }
    }

    const handleChangData = (item) => {
        setActivePage(item)
    }
    return (
        <>
            <div className="title">
                <h1>Dự án</h1>
            </div>

            <SelectInvestment handleInvestment={handleInvestment} />
            <div className="wrapper__table">
                <section className="content-header" >
                    <div className="button__add" >
                        <button onClick={() => {
                            history.push('/auth/project/add')
                        }}>
                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                            </svg>
                        </button>
                    </div>
                </section>
                <div className="box-body">
                    <table id="example1" className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>STT</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Ảnh</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Tên dự án</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Tổng vốn đầu tư</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Lĩnh vực đầu tư</th>
                                <th className="text-center" width="12%">Setting</th>
                            </tr>
                        </thead>

                        {!loading ?
                            <tbody>
                                {data?.data.map((item, index) => {
                                    return (
                                        <Item data={item} indexNum={index + 1} key={index} getSearch={getSearch} handleLoading={handleLoading} />
                                    )
                                })}
                            </tbody>
                            : <Loading />
                        }
                    </table>
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
