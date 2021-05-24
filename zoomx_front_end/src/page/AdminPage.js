import React, { useState } from 'react';
import Dashboard from '../component/admin/dashboard/Dashboard';
import { SideBar } from '../component/admin/sidebar/SideBar';
import '../style/admin.scss';
import '../style/admin/adminPage.scss';
export default function AdminPage() {
    const [isPage, setIsPage] = useState("investment")
    return (
        <>
            <div className="wrapper-adminPage">
                <div style={{ display: 'flex',width:'100%' }}>
                    <SideBar setIsPage={setIsPage} isPage={isPage} />
                    <Dashboard isPage={isPage} />
                </div>
            </div>


        </>
    )
}
