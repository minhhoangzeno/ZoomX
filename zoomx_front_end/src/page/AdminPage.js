import React, { useState } from 'react';
import Dashboard from '../component/admin/Dashboard';
import { SideBar } from '../component/admin/SideBar';
import '../style/admin.scss';
export default function AdminPage() {
    const [isPage, setIsPage] = useState("home")
    let handlePage = (page) => {
        setIsPage(page)
    }
    return (
        <>
            <div className="wrapper-adminPage">
                <div style={{ display: 'flex', width: '100%' }}>
                    <SideBar handlePage={handlePage} isPage={isPage} />
                    <Dashboard isPage={isPage} />
                </div>
            </div>
        </>
    )
}
