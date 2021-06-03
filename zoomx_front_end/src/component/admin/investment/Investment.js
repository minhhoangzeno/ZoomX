import React, { useEffect, useState } from 'react';
import Item from './Item';
import Loading from "../../image/Loading"
import ModalAdd from './ModalAdd';
import '../../../style/admin-investment.scss';
import { doGet } from '../../../lib/DataSource';
import Pagination from "react-js-pagination";

export default function Investment() {
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        getInvestment()
    }, [activePage])

    const handleLoading = (isLoading) => {
        setLoading(isLoading)
    }
    const handleChangData = (item) => {
        setActivePage(item)
    }
    const getInvestment = async () => {
        const path = `/investment-paginate-all?page=${activePage}`;
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
    return (
        <>

            <div className="title">
                <h1>Lĩnh vực đầu tư</h1>
            </div>

            <div className="find__input">
                <input className="input-txt" placeholder="Tìm kiếm..."
                />
                <button>
                    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg>
                </button>
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
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Tên dự án</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Mô tả</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Ảnh cover</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Trạng thái</th>
                                <th className="text-center" width="12%">Setting</th>
                            </tr>
                        </thead>
                        <ModalAdd
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            handleLoading={handleLoading}
                            getInvestment={getInvestment}

                        />
                        {!loading ?
                            <tbody>
                                {data?.data?.map((item, index) => {
                                    return (
                                        <Item
                                            dataInvestment={item}
                                            key={index}
                                            handleLoading={handleLoading}
                                            indexNum={parseInt((5 * (activePage - 1)) + index + 1)}
                                            getInvestment={getInvestment} />
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