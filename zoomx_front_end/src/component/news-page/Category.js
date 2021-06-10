import React, { useEffect, useState } from "react";
import { doGet } from "../../lib/DataSource";

export default function Category() {
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
            {categoryBlog?.map((item, idx) => {
              return (
                <p key={idx} className="small__content">{item?.name}</p>
              )
            })}

          </div>
          <p className="average__word">TÌM KIẾM</p>
          <input className="search__item" type="text" />
          <button className="btn__search">TÌM KIẾM</button>
        </div>
      </div>
    </>
  );
}
