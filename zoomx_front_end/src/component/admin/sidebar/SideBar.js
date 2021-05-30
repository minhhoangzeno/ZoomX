import React, { useState } from 'react';
export function SideBar({ setIsPage, isPage }) {
    return (
        <>
            <div className="sidebar__admin">
                <ul className="sidebar__admin--menu">
                    <HomeOption isPage={isPage} setIsPage={setIsPage} />
                    <li className={((isPage === "investment") ? "sidebar__admin--menu--active sidebar__admin--menu--item " :
                        "sidebar__admin--menu--item")}
                        onClick={() => setIsPage("investment")}>
                        <span>Linh vuc dau tu</span></li>
                    <li className={((isPage === "project") ? "sidebar__admin--menu--active sidebar__admin--menu--item " :
                        "sidebar__admin--menu--item")}
                        onClick={() => setIsPage("project")}>
                        <span>Du an</span>
                    </li>
                    <li className={((isPage === "blog") ? "sidebar__admin--menu--active sidebar__admin--menu--item " :
                        "sidebar__admin--menu--item")}
                        onClick={() => setIsPage("blog")}>
                        <span>Blog</span>
                    </li>
                    <li className={((isPage === "recruitment") ? "sidebar__admin--menu--active sidebar__admin--menu--item " :
                        "sidebar__admin--menu--item")}
                        onClick={() => setIsPage("recruitment")}>
                        <span>Tuyen dung</span>
                    </li>
                    <li className={((isPage === "partner") ? "sidebar__admin--menu--active sidebar__admin--menu--item " :
                        "sidebar__admin--menu--item")}
                        onClick={() => setIsPage("partner")}>
                        <span>Doi tac</span>
                    </li>
                    <li className={((isPage === "timeline") ? "sidebar__admin--menu--active sidebar__admin--menu--item " :
                        "sidebar__admin--menu--item")}
                        onClick={() => setIsPage("timeline")}>
                        <span>Lo trinh trien khai</span>
                    </li>
                </ul>
            </div>

        </>
    )
}

function HomeOption({ isPage, setIsPage }) {
    let [isMenu, setIsMenu] = useState(false)
    const [item,setItem] = useState("hero")
    return (
        <>
            <li className={((isPage === "home") ? "sidebar__admin--menu--active sidebar__admin--menu--item " :
                "sidebar__admin--menu--item")}
                onClick={() => setIsPage("home")}>
                <span>Trang chủ</span>
                <div onClick={() => setIsMenu(!isMenu)}>
                    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </div>
            </li>
            <ul className="menu" style={{ display: isMenu ? "flex" : "none", flexDirection: 'column' }}>
                <li>Hero Trang chủ</li>
                <li>Khách sạn ZoomX</li>
                <li>Tại sao chọn ZoomX</li>
                <li>Lộ trình triển khai</li>
            </ul>
        </>
    )
}