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
                            <a>
                                LOOK
                            </a>
                        </li>
                        /
                        <li>
                            <img src={iconNav} alt="" />
                            <a>
                                HÌNH ẢNH
                            </a>
                        </li>
                        /
                        <li>
                            <img src={iconNav} alt="" />
                            <a>
                                VIDEO
                            </a>
                        </li>
                        /
                    </ul>
                </div>
            </div>
        </>
    )
}