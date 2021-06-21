import React, { useEffect, useState } from 'react';
import { doGet } from '../../../lib/DataSource';
import Loading from '../../image/Loading';
import UserItem from './UserItem';
export default function User() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getHero()
    }, [])

    const handleLoading = (isLoading) => {
        setLoading(isLoading)
    }

    const getHero = async () => {
        const path = "/user";
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
                <h1>Quản lý tài khoản</h1>
            </div>
            <div className="wrapper__table">
                <div className="box-body">
                    <table id="example1" className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>STT</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Tên hiển thị</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Tên tài khoản</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Avatar</th>
                                <th className="text-center" style={{ verticalAlign: 'middle' }}>Role</th>
                                <th className="text-center" width="12%">Setting</th>
                            </tr>
                        </thead>
                       
                        {!loading ?
                            <tbody>
                                {data?.map((item, index) => {
                                    return (
                                        <UserItem data={item} key={index} handleLoading={handleLoading} indexNum={index + 1} getHero={getHero} />
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