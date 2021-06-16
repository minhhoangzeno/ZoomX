import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './style/subpage.scss'

export default function SubItem({ handlePage, isPage, user }) {
    let history = useHistory()
    let handleStyle = (page) => {
        if (page === isPage) {
            return "sidebar__sub--menu--item li__active"
        } else {
            return "sidebar__sub--menu--item"
        }
    }
    const [isSetting, setSetting] = useState(false)

    return (
        <>
            <div className="sidebar__sub" onClick={() => setSetting(!isSetting)}>
                <div className="sidebar__sub--menu">

                    <div className="sidebar__sub--menu--item"
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <div >
                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                            </svg>
                        </div>
                        <ul className="sub__setting" style={{ display: (isSetting) ? "block" : "none" }}>
                            {/* <li onClick={() => handlePage('manage-user')}
                                className={handleStyle("manage-user")}
                            >Quản lý người dùng</li> */}
                            <input placeholder="Search..." type="text" />
                        </ul>
                    </div>
                </div>
            </div>
            


        </>
    )
}

