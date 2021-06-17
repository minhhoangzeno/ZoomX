import React, { useEffect, useState } from 'react';
import { doGet } from '../../../lib/DataSource';
import Loading from '../../image/Loading';
import Pagination from "react-js-pagination";

import Item from './Item';
import ModalAdd from './ModalAdd';
export default function Recruitment() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [modalShow,setModalShow] = useState(false);
    const [activePage,setActivePage] = useState(1);
    useEffect(() => {
        getSearch()
        window.scrollTo(0, 0)

    },[]) // eslint-disable-line react-hooks/exhaustive-deps
   
    useEffect(() => {
        getSearch()
    },[activePage]) // eslint-disable-line react-hooks/exhaustive-deps
   
    const getSearch = async () => {
        const path = `/recruitment?page=${activePage}`;
        const headers = {
            Accept: "*/*"
        }
        try {
            var resp = await doGet(path, headers);
            if (resp.status === 200) {
                setData(resp.data)
                handleLoading(false)
            }
        } catch (e) {
            console.log(e)
            handleLoading(false)
        }
    }
   
    const handleLoading = (isLoading) => {
        setLoading(isLoading)
    }
    return (
        <>
            <div className="title">
                <h1>Tuyển dụng</h1>
            </div>

           
            <div className="wrapper__table">
                <section className="content-header">
                    <div className="button__add" >
                        <button onClick={() => setModalShow(true)}>
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
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Tiêu đề</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Ngành nghề</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Lương</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Hạn nộp hồ sơ</th>
                                <th className="text-center" width="12%">Setting</th>
                            </tr>
                        </thead>
                        <ModalAdd
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            handleLoading={handleLoading}
                            getSearch={getSearch}

                        />
                        {!loading ?
                            <tbody>
                                {data?.data.map((item, index) => {
                                    return (
                                        <Item data={item} key={index} handleLoading={handleLoading} indexNum={index + 1} getSearch={getSearch} />
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
                    onChange={(item) => setActivePage(item)}
                />
            </div>
        </>
    )
}