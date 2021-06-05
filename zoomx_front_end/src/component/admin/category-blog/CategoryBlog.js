import React, { useEffect, useState } from 'react';
import { doGet } from '../../../lib/DataSource';
import '../../../style/admin-investment.scss';
import Loading from "../../image/Loading";
import Item from './Item';
import ModalAdd from './ModalAdd';

export default function CategoryBlog() {
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let getData = async () => {
            handleLoading(true)
            const path = `/categoryblog`;
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
        getData()
    }, [])

    const handleLoading = (isLoading) => {
        setLoading(isLoading)
    }
   
    const getData = async () => {
        handleLoading(true)
        const path = `/categoryblog`;
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
    return (
        <>

            <div className="title">
                <h1>Danh muc bai viet</h1>
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
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Ten danh muc</th>
                                <th className="text-center" width="12%">Setting</th>
                            </tr>
                        </thead>
                         <ModalAdd
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            handleLoading={handleLoading}
                            getData={getData}

                        />
                        {!loading ?
                            <tbody>
                                {data?.map((item, index) => {
                                    return (
                                        <Item
                                            data={item}
                                            key={index}
                                            handleLoading={handleLoading}
                                            indexNum={index+1}
                                            getData={getData} />
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