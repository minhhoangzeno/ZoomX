import React, { useEffect, useState } from 'react';
import { doGet } from '../../../lib/DataSource';
import Item from './Item';
// import { doGet } from '../../../lib/DataSource';
import Loading from '../../image/Loading';
// import Item from './Item';
import ModalAdd from './ModalAdd';
export default function Project() {
    const [data, setData] = useState();
    const [investmentId, setInvestmentId] = useState(null);
    const handleInvestment = (id) => {
        setInvestmentId(id)
    }
    const [loading, setLoading] = useState(true);
    const [modalShow,setModalShow] = useState(false)
    useEffect(() => {
        getSearch()
    },[investmentId])
    const getSearch = async () => {
        let path = (investmentId==null) ? '/project' : `/project/${investmentId}`;      
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
                <h1>Dự án</h1>
            </div>

            {/* <div className="find__input">
                <input className="input-txt" placeholder="Tìm kiếm..."
                />
                <button>
                    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg>
                </button>
            </div> */}
            <InvestmentSelect handleInvestment={handleInvestment} />
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
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Tên dự án</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Tổng vốn đầu tư</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Địa điểm</th>
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
                                {data?.map((item, index) => {
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
        </>
    )
}

function InvestmentSelect({ handleInvestment }) {
    const [investment, setInvestment] = useState();
    useEffect(() => {
        getInvestment()
    }, [])
    const getInvestment = async () => {
        const path = "/investment";
        const headers = {
            Accept: "*/*"
        }
        try {
            var resp = await doGet(path, headers);
            if (resp.status === 200) {
                setInvestment(resp.data)

            }
        } catch (e) {
            console.log(e)
        }
    }
    
    return (
        <>
            <label for="cars">Chon linh vuc dau tu:</label>
            <select name="cars" id="cars" onChange={(e) => handleInvestment(e.target.value)}>
            <option value="">Tat ca</option>
                {investment?.map((item, idx) => {
                    return (
                        <option key={idx} value={item._id}>{item.investmentName}</option>
                    )
                })}
            </select>
        </>
    )
}