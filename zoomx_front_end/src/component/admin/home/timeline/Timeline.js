import React, { useEffect, useState } from 'react';
import Item from './Item';
import Loading from "../../../image/Loading"
import ModalAdd from './ModalAdd';
import '../../../../style/admin-investment.scss';
import { doGet } from '../../../../lib/DataSource'
export default function Timeline() {
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTimeline()
    }, [])

    const handleLoading = (isLoading) => {
        setLoading(isLoading)
    }

    const getTimeline = async () => {
        const path = "/timeline";
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
                <h1>Lộ trình triển khai</h1>
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
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Label</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Content</th>
                                <th className="text-center" width="12%">Setting</th>
                            </tr>
                        </thead>
                        <ModalAdd
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            handleLoading={handleLoading}
                            getTimeline={getTimeline}

                        />
                        {!loading ?
                            <tbody>
                                {data?.map((item, index) => {
                                    return (
                                        <Item dataTimeline={item} key={index} handleLoading={handleLoading} indexNum={index + 1} getTimeline={getTimeline} />
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