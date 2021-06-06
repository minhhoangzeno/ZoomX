import React, { useEffect, useState } from 'react';
import Item from './Item';
import Loading from '../../../image/Loading';
import ModalAdd from './ModalAdd';
import Pagination from "react-js-pagination";
import { doGet } from '../../../../lib/DataSource';
// import SearchBlog from './SearchBlog';
export default function LibraryImage() {

    //data tra ve co {data,totalPage}
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [activePage,setActivePage] = useState(1)
    //modal Add
    const [modalShow, setModalShow] = useState(false)
    const handleLoading = (isLoading) => {
        setLoading(isLoading)
    }
    useEffect(() => {
        getSearch()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
       getSearch()
    }, [activePage]) // eslint-disable-line react-hooks/exhaustive-deps

    const getSearch = async () => {
        setLoading(true)
        let path = `/library/image?page=${activePage}`;
        const headers = {
            Accept: "*/*"
        }
        try {
            let resp = await doGet(path, headers);
            if (resp.status === 200) {
                setLoading(false)
                setData(resp.data)
            }
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="title">
                <h1>Thư viện Lookup</h1>
            </div>


            <div className="wrapper__table">
                <section className="content-header" >
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
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Tên anh</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Anh mo ta</th>
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
                                        <Item data={item} key={index} handleLoading={handleLoading}
                                            indexNum={parseInt((5 * (activePage - 1)) + index + 1)}
                                            getSearch={getSearch} />         
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
                    onChange={(item) => setActivePage(item)}
                />
            </div>
        </>
    )
}
