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
                        <li onClick={() => handlePage('header')}
                            className={handleStyle("header")}
                        >
                            <span>Header</span>
                        </li>
                        <li onClick={() => handlePage('icon')}
                            className={handleStyle("icon")}
                        >
                            <span>Icon Footer</span>
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
                            <span>Hero Gioi thieu</span>
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
                    <div className={handleStyle("project")}
                        onClick={() => handlePage('project')}
                    >
                        <span>Dự án</span>
                    </div>
                    <ul className="sub__menu">
                        <li onClick={() => handlePage('hero-project')}
                            className={handleStyle("hero-project")}
                        >
                            <span>Hero Du an</span>
                        </li>
                    </ul>
                    <hr />
                    <div className={handleStyle("investment")}
                        onClick={() => handlePage('investment')}

                    >
                        <span>Lĩnh vực đầu tư</span>
                    </div>
                    <ul className="sub__menu">
                        <li onClick={() => handlePage('hero-investment')}
                            className={handleStyle("hero-investment")}
                        >
                            <span>Hero Linh vuc dau tu</span>
                        </li>
                    </ul>
                    <hr />
                    <div className={handleStyle("blog")}
                        onClick={() => handlePage('blog')}

                    >
                        <span>Blog</span>
                    </div>
                    <ul className="sub__menu">
                        <li onClick={() => handlePage('hero-blog')}
                            className={handleStyle("hero-blog")}
                        >
                            <span>Hero Blog</span>
                        </li>
                    </ul>
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
                    <ul className="sub__menu">
                        <li onClick={() => handlePage('hero-contact')}
                            className={handleStyle("hero-contact")}
                        >
                            <span>Hero Lien he</span>
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
                    <div className={handleStyle("library")}
                        onClick={() => handlePage('library')}

                    >
                        <span>Thư viện</span>
                    </div>
                    <ul className="sub__menu">
                        <li onClick={() => handlePage('hero-library')}
                            className={handleStyle('hero-library')}
                        >
                            <span>Hero Thu vien</span>
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
                    <div className={handleStyle("recruitment")}
                        onClick={() => handlePage('recruitment')}

                    >
                        <span>Tuyển dụng</span>
                    </div>
                    <ul className="sub__menu">
                        <li onClick={() => handlePage('hero-recruitment')}
                            className={handleStyle('hero-recruitment')}
                        >
                            <span>Hero Tuyen dung</span>
                        </li>
                    </ul>
                    <hr />

                </div>
            </div>

        </>
    )
}

