import React, { useState } from 'react';
import Dashboard from '../component/admin/dashboard/Dashboard';
import { SideBar } from '../component/admin/sidebar/SideBar';
import Admin from '../component/admin/admin-cpn/Admin';
import '../style/admin.scss';
import '../style/admin/adminPage.scss';
export default function AdminPage() {
    const [isPage, setIsPage] = useState()
    return (
        <>
            <div className="wrapper-adminPage">
                <div style={{ display: 'flex' }}>
                    <SideBar setIsPage={setIsPage} />
                    <Dashboard isPage={isPage} />
                </div>
                <div>
                    <Admin />
                </div>
            </div>


        </>
    )
}
