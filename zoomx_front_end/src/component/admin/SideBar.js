import React from 'react';
export function SideBar({ handlePage, isPage }) {
    let handleStyle = (page) => {
        if (page === isPage) {
            return "sidebar__admin--menu--item li__active"
        } else {
            return "sidebar__admin--menu--item"
        }
    }
    return (
        <>
            <div className="sidebar__admin">
                <div className="sidebar__admin--menu">
                    <div className={handleStyle("home")}
                        onClick={() => handlePage('home')}
                    >
                        <span>Trang chủ</span>
                    </div>
                    <ul className="sub__menu">
                        <li onClick={() => handlePage('heroHome')}
                        className={handleStyle("heroHome")}
                        >
                            <span>Hero Trang chủ</span>
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
                    </ul>
                    <hr />
                    <div className="sidebar__admin--menu--item"
                    >
                        <span >Giới thiệu</span>
                    </div>
                    <ul className="sub__menu">
                        <li onClick={() => handlePage('slogan')}
                        className={handleStyle("slogan")}
                        >
                            <span>Slogan</span>
                        </li>
                        <li onClick={() => handlePage('zoomx')}
                        className={handleStyle("zoomx")}
                        >
                            <span>ZoomX</span>
                        </li>
                        <li onClick={() => handlePage('youngBusiness')}
                        className={handleStyle("youngBusiness")}
                        >
                            <span>Khoi nghiep khat vong tuoi tre</span>
                        </li>
                        <li onClick={() => handlePage('partner')}
                        className={handleStyle("partner")}
                        >
                            <span>Doi tac</span>
                        </li>
                    </ul>
                    <hr />
                    <div className={handleStyle("project")}
                        onClick={() => handlePage('project')}

                    >
                        <span>Dự án</span>
                    </div>
                    <hr />
                    <div className={handleStyle("investment")}
                        onClick={() => handlePage('investment')}

                    >
                        <span>Lĩnh vực đầu tư</span>
                    </div>
                    <hr />
                    <div className={handleStyle("news")}
                        onClick={() => handlePage('news')}

                    >
                        <span>Tin tức - Sự kiện</span>
                    </div>
                    <hr />
                    <div className={handleStyle("blog")}
                        onClick={() => handlePage('blog')}

                    >
                        <span>Blog</span>
                    </div>
                    <hr />
                    <div className={handleStyle("category-blog")}
                        onClick={() => handlePage('category-blog')}

                    >
                        <span>Danh muc bai viet</span>
                    </div>
                    <hr />
                    <div className={handleStyle("contact")}
                        onClick={() => handlePage('contact')}

                    >
                        <span>Liên hệ</span>
                    </div>
                    <hr />
                    <div className={handleStyle("user-contact")}
                        onClick={() => handlePage("user-contact")}
                    >
                        <span>Người Liên Hệ</span>
                    </div>
                    <hr />
                    <div className={handleStyle("library")}
                        onClick={() => handlePage('library')}

                    >
                        <span>Thư viện</span>
                    </div>
                    <hr />
                    <div className={handleStyle("recruitment")}
                        onClick={() => handlePage('recruitment')}

                    >
                        <span>Tuyển dụng</span>
                    </div>
                   
                </div>
            </div>

        </>
    )
}

