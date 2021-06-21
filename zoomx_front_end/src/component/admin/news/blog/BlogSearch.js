import React, { useEffect, useState } from 'react';
import CategorySelect from './CategorySelect';
import Item from './Item';
import SearchBlog from './SearchBlog';
import Pagination from "react-js-pagination";
import { useHistory } from 'react-router-dom';
import { doGet } from '../../../../lib/DataSource';
import Loading from '../../../image/Loading';
export default function BlogSearch({ handleSearch }) {
    let history = useHistory();
    const [data, setData] = useState();
    const [activePage, setActivePage] = useState(1);
    const [textSearch, setTextSearch] = useState("");
    const [loading, setLoading] = useState(false)

    const handleLoading = (isLoading) => {
        setLoading(isLoading)
    }
    useEffect(() => {
        getSearch()
    }, [])
    useEffect(() => {
        getSearch()
    }, [activePage])
    const getSearch = async () => {
        setLoading(true)
        let path = `/blog?page=${activePage}&q=${textSearch}`;
        try {
            let resp = await doGet(path);
            if (resp.status === 200) {
                setData(resp.data)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
        }
    }
    const handleActivePage = (item) => {
        setActivePage(item)
    }
    return (
        <>

            <SearchBlog />

            <div className="wrapper__table">
                <section className="content-header" >
                    <div className="button__add" >
                        <button onClick={() => {
                            handleSearch(false)
                        }}>
                            Quay lại
                        </button>
                    </div>
                </section>
                <div className="box-body">
                    <table id="example1" className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>STT</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Tieu de</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Ngay viet</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Danh muc bai viet</th>
                                <th className="text-center" width="12%">Setting</th>
                            </tr>
                        </thead>

                        {!loading ?
                            <tbody>
                                {data?.data.map((item, index) => {
                                    return (
                                        <Item data={item} key={index} handleLoading={handleLoading}
                                            indexNum={parseInt((8 * (activePage - 1)) + index + 1)}
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
                    itemsCountPerPage={8}
                    totalItemsCount={parseInt(data?.totalPage)}
                    pageRangeDisplayed={3}
                    onChange={(item) => handleActivePage(item)}
                />
            </div>
        </>
    )
}
