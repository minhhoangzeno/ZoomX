import React, { useState } from 'react';
import { useHistory } from 'react-router';

export function SideBar({ handlePage, isPage, user }) {
    let history = useHistory()
    let handleStyle = (page) => {
        if (page === isPage) {
            return "sidebar__admin--menu--item li__active"
        } else {
            return "sidebar__admin--menu--item"
        }
    }
    const [isSetting, setSetting] = useState(false)
    return (
        <>
            <div className="sidebar__admin">
                <div className="sidebar__admin--menu">

                    <div className="sidebar__admin--menu--item"
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}
                    >
                        <div><img alt="" src={user?.avatar?.url} style={{ width: 40, height: 40, borderRadius: 20, objectFit: 'cover' }} /></div>
                        <div>{user?.displayName}</div>
                        <div onClick={() => setSetting(!isSetting)}>
                            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                            </svg>
                        </div>
                        <ul className="admin__setting" style={{ display: (isSetting) ? "block" : "none" }}>
                            {user?.isAdmin === "Admin" &&
                                <>
                                    <li onClick={() => handlePage('manage-user')}
                                        className={handleStyle("manage-user")}
                                    >Quản lý người dùng</li>
                                </>
                            }
                            <li onClick={() => handlePage('manage-account')}
                                className={handleStyle("manage-account")}
                            >Tài khoản</li>
                            <li onClick={() => {
                                history.push("/login")
                                localStorage.removeItem("user")
                            }}>Đăng xuất</li>
                        </ul>
                    </div>
                    <hr />
                    {user?.isAdmin === "Admin" &&
                        <>
                            <div className="sidebar__admin--menu--item"
                            >
                                <span>Trang chủ</span>
                            </div>
                            <ul className="sub__menu">
                                <li onClick={() => handlePage('heroHome')}
                                    className={handleStyle("heroHome")}
                                >
                                    <span>Ảnh đầu trang chủ</span>
                                </li>
                                <li onClick={() => handlePage('defineHome')}
                                    className={handleStyle("defineHome")}
                                >
                                    <span>Khách sạn quay ZoomX là gì</span>
                                </li>
                                <li onClick={() => handlePage('reasonSelect')}
                                    className={handleStyle("reasonSelect")}
                                >
                                    <span>Tại sao chọn ZoomX Hotels</span>
                                </li>
                                <li onClick={() => handlePage('timeLine')}
                                    className={handleStyle("timeLine")}
                                >
                                    <span>Lộ trình triển khai</span>
                                </li>
                                <li onClick={() => handlePage('video')}
                                    className={handleStyle("video")}
                                >
                                    <span>Video</span>
                                </li>
                                <li onClick={() => handlePage('header')}
                                    className={handleStyle("header")}
                                >
                                    <span>Đầu trang</span>
                                </li>
                                <li onClick={() => handlePage('icon')}
                                    className={handleStyle("icon")}
                                >
                                    <span>Icon cuối trang</span>
                                </li>
                            </ul>
                            <hr />
                            <div className="sidebar__admin--menu--item"
                            >
                                <span >Giới thiệu</span>
                            </div>
                            <ul className="sub__menu">
                                <li onClick={() => handlePage('hero-zoomx')}
                                    className={handleStyle("hero-zoomx")}
                                >
                                    <span>Ảnh đầu trang giới thiệu</span>
                                </li>
                                <li onClick={() => handlePage('slogan')}
                                    className={handleStyle("slogan")}
                                >
                                    <span>Trích dẫn</span>
                                </li>
                                <li onClick={() => handlePage('zoomx')}
                                    className={handleStyle("zoomx")}
                                >
                                    <span>ZoomX</span>
                                </li>
                                <li onClick={() => handlePage('youngBusiness')}
                                    className={handleStyle("youngBusiness")}
                                >
                                    <span>Khởi nghiệp khát vọng tuổi trẻ</span>
                                </li>
                                <li onClick={() => handlePage('partner')}
                                    className={handleStyle("partner")}
                                >
                                    <span>Đối tác</span>
                                </li>
                            </ul>
                            <hr />
                            <div className="sidebar__admin--menu--item"
                            >
                                <span>Trang Dự án</span>
                            </div>
                            <ul className="sub__menu">
                                <li onClick={() => handlePage('hero-project')}
                                    className={handleStyle("hero-project")}
                                >
                                    <span>Ảnh đầu trang dự án</span>
                                </li>
                                <li onClick={() => handlePage('project')}
                                    className={handleStyle("project")}
                                >
                                    <span>Dự án</span>
                                </li>
                            </ul>
                            <hr />
                            <div className="sidebar__admin--menu--item"
                            >
                                <span>Trang Lĩnh vực đầu tư</span>
                            </div>
                            <ul className="sub__menu">
                                <li onClick={() => handlePage('hero-investment')}
                                    className={handleStyle("hero-investment")}
                                >
                                    <span>Ảnh đầu trang lĩnh vực đầu tư</span>
                                </li>
                                <li onClick={() => handlePage('investment')}
                                    className={handleStyle("investment")}
                                >
                                    <span>Lĩnh vực đầu tư</span>
                                </li>

                            </ul>
                            <hr />

                        </>
                    }
                    <div className="sidebar__admin--menu--item"
                    >
                        <span>Tin tức - Sự kiện</span>
                    </div>
                    <ul className="sub__menu">
                        <li onClick={() => handlePage('hero-news')}
                            className={handleStyle("hero-news")}
                        >
                            <span>Ảnh đầu trang tin tức</span>
                        </li>
                        <li onClick={() => handlePage('blog')}
                            className={handleStyle("blog")}
                        >
                            <span>Bài viết</span>
                        </li>
                        <li onClick={() => handlePage('category-blog')}
                            className={handleStyle("category-blog")}
                        >
                            <span>Danh mục bài viết</span>
                        </li>
                    </ul>
                    <hr />

                    {user?.isAdmin === "Admin" &&
                        <>
                            <div className={"sidebar__admin--menu--item"}
                            >
                                <span>Trang Liên hệ</span>
                            </div>
                            <ul className="sub__menu">
                                <li onClick={() => handlePage('hero-contact')}
                                    className={handleStyle("hero-contact")}
                                >
                                    <span>Ảnh đầu trang liên hệ</span>
                                </li>
                                <li onClick={() => handlePage('contact')}
                                    className={handleStyle("contact")}
                                >
                                    <span>Liên hệ</span>
                                </li>

                            </ul>
                            <hr />
                            <div className="sidebar__admin--menu--item">
                                <span>Danh sách người gửi tin</span>
                            </div>
                            <ul className="sub__menu">
                                <li onClick={() => handlePage("user-contact")}
                                    className={handleStyle("user-contact")}
                                >
                                    <span>Người liên hệ</span>
                                </li>
                                <li onClick={() => handlePage('user-recruitment')}
                                    className={handleStyle('user-recruitment')}
                                >
                                    <span>Người tuyển dụng</span>
                                </li>
                                <li onClick={() => handlePage('user-mail')}
                                    className={handleStyle('user-mail')}
                                >
                                    <span>Người gửi mail</span>
                                </li>
                            </ul>
                            <hr />
                            <div className="sidebar__admin--menu--item">
                                <span>Thư viện</span>
                            </div>
                            <ul className="sub__menu">
                                <li onClick={() => handlePage('hero-library')}
                                    className={handleStyle('hero-library')}
                                >
                                    <span>Ảnh đầu trang thư viện</span>
                                </li>
                                <li onClick={() => handlePage('library-lookup')}
                                    className={handleStyle('library-lookup')}
                                >
                                    <span>Thư viện Lookup</span>
                                </li>
                                <li onClick={() => handlePage('library-image')}
                                    className={handleStyle('library-image')}
                                >
                                    <span>Thư viện ảnh</span>
                                </li>
                                <li onClick={() => handlePage('library-video')}
                                    className={handleStyle('library-video')}
                                >
                                    <span>Thư viện Video</span>
                                </li>
                            </ul>
                            <hr />
                            <div className="sidebar__admin--menu--item">
                                <span>Trang Tuyển dụng</span>
                            </div>
                            <ul className="sub__menu">
                                <li onClick={() => handlePage('hero-recruitment')}
                                    className={handleStyle('hero-recruitment')}
                                >
                                    <span>Ảnh đầu trang tuyển dụng</span>
                                </li>
                                <li onClick={() => handlePage('recruitment')}
                                    className={handleStyle('recruitment')}
                                >
                                    <span>Tuyển dụng</span>
                                </li>

                            </ul>
                            <hr />

                        </>
                    }
                </div>
            </div>

        </>
    )
}

