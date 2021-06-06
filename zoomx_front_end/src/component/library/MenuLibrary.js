import React from 'react';
import '../../style/library.scss'
import iconNav from '../../image/home/librarypage/icon-menu.png'

export default function MenuLibrary({ isPage, handlePage }) {
    return (
        <>
            <div className="menu__wrapper">
                <div className="container-fluid">
                    <ul className="menu__library">
                        <li onClick={() => handlePage("lookup")}>
                            <img src={iconNav} alt="" />
                            <span>
                                LOOK
                                <div style={{display: (isPage === "lookup") ? 'block' : 'none'}} className="active-cpn"></div>
                            </span>
                        </li>
                        /
                        <li onClick={() => handlePage("image")}>
                            <img src={iconNav} alt="" />
                            <span>
                                HÌNH ẢNH
                                <div style={{display: (isPage === "image") ? 'block' : 'none'}} className="active-cpn"></div>

                            </span>

                        </li>
                        /
                        <li onClick={() => handlePage("video")}>
                            <img src={iconNav} alt="" />
                            <span>
                                VIDEO
                                <div style={{display: (isPage === "video") ? 'block' : 'none'}} className="active-cpn"></div>

                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}