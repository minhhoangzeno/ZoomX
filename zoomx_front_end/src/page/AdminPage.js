import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Dashboard from '../component/admin/Dashboard';
import { SideBar } from '../component/admin/SideBar';
import '../style/admin.scss';

export default function AdminPage() {
    const location = useLocation();
    const page = location.state;
    const [user, setUser] = useState();
    const userLocal = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        fetchData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
    async function fetchData() {
        setUser(userLocal)
    }
    const [isPage, setIsPage] = useState("home")
    let handlePage = (page) => {
        setIsPage(page)
    }
    useEffect(() => {
        handlePage(page)
    }, [page]) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <div className="wrapper-adminPage">
                <div style={{ display: 'flex', width: '100%' }}>
                    <SideBar handlePage={handlePage} isPage={isPage} user={user} />
                    <Dashboard isPage={isPage} />
                </div>
            </div>
        </>
    )
}
