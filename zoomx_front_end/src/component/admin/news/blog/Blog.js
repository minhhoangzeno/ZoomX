import React from 'react';
import CategorySelect from './CategorySelect';
import Item from './Item';
import SearchBlog from './SearchBlog';
import Pagination from "react-js-pagination";

export default function Blog(){
    return(
        <>
           <div className="title">
                <h1>Blog</h1>
            </div>  
            <SearchBlog />
            <CategorySelect />

            <div className="wrapper__table">
                <section className="content-header" >
                    <div className="button__add" >
                        <button>
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
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Tieu de</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Ngay viet</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Danh muc bai viet</th>
                                <th className="text-center" width="12%">Setting</th>
                            </tr>
                        </thead>

                        {/* {!loading ?
                            <tbody>
                                {data?.data.map((item, index) => {
                                    return (           
                                        <Item data={item} key={index} handleLoading={handleLoading}
                                            indexNum={parseInt((5 * (select?.activePage - 1)) + index + 1)}
                                            getSearch={getSearch} />         
                                    )
                                })}
                            </tbody>
                            : <Loading />
                        } */}
                        <Item />
                    </table>
                </div>
            </div>
            <div className="wrapper-paginate">

                {/* <Pagination
                    activePage={select.activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={parseInt(data?.totalPage)}
                    pageRangeDisplayed={3}
                    onChange={(item) => handleActivePage(item)}
                /> */}
            </div>
        </>
    )
}