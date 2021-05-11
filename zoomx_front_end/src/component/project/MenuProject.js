import React from 'react';
import '../../style/project.scss';
import iconNav from '../../image/home/librarypage/icon-menu.png';

export default function MenuProject() {
    return(
        <>
        <div className="menu__wrapper">
                <div className="container-fluid">
                    <ul className="menu__project">
                        <li>
                            <img src={iconNav} alt="" />
                            <a>
                                KHÁCH SẠN
                            </a>
                        </li>
                        /
                        <li>
                            <img src={iconNav} alt="" />
                            <a>
                                BẤT ĐỘNG SẢN        
                            </a>
                        </li>
                        /
                        <li>
                            <img src={iconNav} alt="" />
                            <a>
                                DU LỊCH
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
