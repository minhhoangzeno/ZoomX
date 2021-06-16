import React, { useEffect, useState } from "react";
import { doGet } from "../../lib/DataSource";

export default function Category({ textSearch, handleTextSearch, handleSearch, handleChangeCategory }) {
  const [categoryBlog, setCategoryBlog] = useState();
  useEffect(() => {
    async function fetchData() {
      let path = "/categoryblog";
      try {
        let resp = await doGet(path);
        if (resp.status === 200) {
          setCategoryBlog(resp.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <div className="main__part">
        <div className="main__category">
          <p className="average__word">DANH MỤC</p>
          <div className="box__content">
            <p className="small__content"
              onClick={() => handleChangeCategory(1)}
            >Tất cả</p>
            {categoryBlog?.map((item, idx) => {
              return (
                <p key={idx} className="small__content"
                  onClick={() => handleChangeCategory(item._id)}
                >{item?.name}</p>
              )
            })}

          </div>
          <p className="average__word">TÌM KIẾM</p>
          <input className="search__item" type="text"
            value={textSearch}
            onChange={(e) => handleTextSearch(e.target.value)}
          />
          <button onClick={() => handleSearch(true)} className="btn__search">TÌM KIẾM</button>
        </div>
      </div>
    </>
  );
}
