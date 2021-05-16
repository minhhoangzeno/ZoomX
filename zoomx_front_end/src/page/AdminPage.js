import React, { useState } from "react";
import Dashboard from "../component/admin/dashboard/Dashboard";
import HeaderAdmin from "../component/admin/HeaderAdmin";
import { SideBar } from "../component/admin/sidebar/SideBar";
import "../style/admin.scss";
import "../style/Admin/projectAdmin.scss";
export default function AdminPage() {
  const [isPage, setIsPage] = useState();
  return (
    <>
      <HeaderAdmin />
      <div style={{ display: "flex" }}>
        <SideBar setIsPage={setIsPage} />
        <Dashboard isPage={isPage} />
      </div>
    </>
  );
}
