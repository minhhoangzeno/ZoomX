import React, { useEffect, useState } from "react";
import { doGet } from "../../lib/DataSource";
import { useHistory } from "react-router";

export default function SearchMobile({ isNavSearch, handleNavSearch }) {
    const [textSearch, setTextSearch] = useState("");
    const [blog, setBlog] = useState();
    let history = useHistory();

    let getSearch = async () => {
        let path = `/blog-search-all?q=${textSearch}`;
        try {
            let resp = await doGet(path);
            if (resp.status === 200) {
                setBlog(resp.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <div
                className={isNavSearch ? "search-mobile openNavMobile" : "search-mobile"}
            >
                <div className="search-mobile__input">
                    <input type="text" placeholder="Tìm kiếm..."
                        onChange={(e) => {
                            setTextSearch(e.target.value)
                            getSearch()
                        }}
                        value={textSearch}
                    />
                    <div className="search-mobile__input--btn"
                        onClick={() => {
                            handleNavSearch(false)
                        }}
                    >
                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24" color="#333">
                            <path fill="currentColor" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
                        </svg>
                    </div>
                </div>
                <ul className="search-mobile__blog">
                    {blog?.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className="image">
                                    <img src={item?.imageInfor?.url} />
                                    <div className="content__title" onClick={() => history.push({
                                        pathname: '/blog-detail',
                                        state: item
                                    })}>
                                        {item?.title}
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="content__description" dangerouslySetInnerHTML={{ __html: item?.content }}>

                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}