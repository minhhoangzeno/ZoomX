import React, { useEffect, useState } from 'react';
import CategorySelect from './CategorySelect';
import Item from './Item';
import SearchBlog from './SearchBlog';
import Pagination from "react-js-pagination";
import { useHistory } from 'react-router-dom';
import { doGet } from '../../../../lib/DataSource';
import Loading from '../../../image/Loading';
export default function Blog() {
    let history = useHistory();
    const [data, setData] = useState();
    const [activePage, setActivePage] = useState(1);
    const [categoryId, setCategory] = useState(1);
    const [textSearch, setTextSearch] = useState("");
    const [isSearch, setIsSearch] = useState(false);
    const handleTextSearch = (text) => {
        setTextSearch(text)
    }
    const [loading, setLoading] = useState(false)
    const handleChangeCategory = (id) => {
        setCategory(id)
        setActivePage(1)
    }
    const handleLoading = (isLoading) => {
        setLoading(isLoading)
    }
    useEffect(() => {
        getSearch()
    }, [])
    useEffect(() => {
        getSearch()
    }, [activePage, categoryId,isSearch])
    const getSearch = async () => {
        if (isSearch) {
            setLoading(true);
            console.log("Search")
            let path = `/blog-search?page=${activePage}&categoryId=${categoryId}&q=${textSearch}`;
            try {
                let resp = await doGet(path);
                if (resp.status === 200) {
                    setData(resp.data)
                    setLoading(false)
                }
            } catch (error) {
                setLoading(false)
            }
        } else{
            setLoading(true)
            console.log("Not Search")
            let path = `/blog?page=${activePage}&categoryId=${categoryId}`;
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
    }
    const handleActivePage = (item) => {
        setActivePage(item)
    }
    const handleSearch = () => {
        setIsSearch(true)
       
    }
    console.log(isSearch)
    return (
        <>
            <div className="title">
                <h1>Blog</h1>
            </div>
            <SearchBlog textSearch={textSearch} handleTextSearch={handleTextSearch} handleSearch={handleSearch} />
            <CategorySelect handleChangeCategory={handleChangeCategory} />


            <div className="wrapper__table">
                <section className="content-header" >
                    {!isSearch ?
                        <div className="button__add" >
                            <button onClick={() => {
                                history.push("/auth/blog/add")
                            }}>
                                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                                </svg>
                            </button>
                        </div> :
                        <> <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18 }}>
                         {data?.totalPage}  Kết quả hiện thị cho tìm kiếm &nbsp; <strong>{textSearch}</strong> &nbsp;
                            <div onClick={() => setIsSearch(false)}>
                                <svg style={{ width: 35, height: 35, cursor: 'pointer' }} color="#65676b" viewBox="0 0 24 24"
                                    onClick={async () => {
                                        await handleTextSearch("");
                                        setIsSearch(false);
                                       
                                    }}
                                >
                                    <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
                                </svg>
                            </div>


                        </div> </>
                    }
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
