import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import { doGet } from '../../../lib/DataSource';
import Loading from "../../image/Loading";
import Item from './Item';

export default function UserContact(){
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [activePage, setActivePage] = useState(1)
    
    useEffect(() => {
        let getData = async () => {
            const path = `/person-contact?page=${activePage}`;
            const headers = {
                Accept: "*/*"
            }
            try {
                var resp = await doGet(path, headers);
                if (resp.status === 200) {
                    setData(resp.data)
    
                }
            } catch (e) {
                console.log(e)
            }
        }
        getData()
    }, [activePage])

    const handleLoading = (isLoading) => {
        setLoading(isLoading)
    }
    const handleChangData = (item) => {
        setActivePage(item)
    }
    const getData = async () => {
        const path = `/person-contact?page=${activePage}`;
        const headers = {
            Accept: "*/*"
        }
        try {
            var resp = await doGet(path, headers);
            if (resp.status === 200) {
                setData(resp.data)

            }
        } catch (e) {
            console.log(e)
        }
    }
    return(
        <>
            <div className="title">
                <h1>Danh sách người liên hệ</h1>
            </div>

            <div className="wrapper__table">
                <section className="content-header">
                </section>
                <div className="box-body">
                    <table id="example1" className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>STT</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Họ tên</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Email</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Số điện thoại</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Ghi chú</th>
                                <th className="text-center" width="12%">Setting</th>
                            </tr>
                        </thead>
                        
                        {!loading ?
                            <tbody>
                                {data?.data?.map((item, index) => {
                                    return (
                                        <Item
                                            data={item}
                                            key={index}
                                            handleLoading={handleLoading}
                                            indexNum={parseInt((5 * (activePage - 1)) + index + 1)}
                                            getData={getData} />
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
                    itemsCountPerPage={5}
                    totalItemsCount={parseInt(data?.totalPage)}
                    pageRangeDisplayed={3}
                    onChange={handleChangData}

                />
            </div>
        </>
    )
}