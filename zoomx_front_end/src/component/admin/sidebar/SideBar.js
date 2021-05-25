import React from 'react';
export function SideBar({ setIsPage, isPage }) {
    return (
        <>
            <div className="sidebar__admin">
                <ul className="sidebar__admin--menu">
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
