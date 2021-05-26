import React from 'react';
import '../../style/library.scss'
import iconNav from '../../image/home/librarypage/icon-menu.png'

export default function MenuLibrary() {
    return (
        <>
            <div className="menu__wrapper">
                <div className="container-fluid">
                    <ul className="menu__library">
                        <li>
                            <img src={iconNav} alt="" />
                            <a href="http://www.github.com">
                                LOOK
                            </a>
                        </li>
                        /
                        <li>
                            <img src={iconNav} alt="" />
                            <a href="http://www.github.com">
                                HÌNH ẢNH
                                <div className="active-cpn"></div>
                            </a>

                        </li>
                        /
                        <li>
                            <img src={iconNav} alt="" />
                            <a href="http://www.github.com">
                                VIDEO
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}