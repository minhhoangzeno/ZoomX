import React, { useEffect, useState } from "react";
import Loading from '../../image/Loading';
import Pagination from "react-js-pagination";
import item from "../../../image/home/librarypage/itemOfList.jpg";
import ModalVideo from "./ModalVideo";
import { doGet } from '../../../lib/DataSource'
import { convertToEmbed } from "../../../utils/RegexUrl";

export default function LibraryVideo() {
  const [data, setData] = useState();
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getSearch();
  }, [])
  useEffect(() => {
    getSearch();
  }, [activePage])
  const handleChangData = (item) => {
    setActivePage(item)
  }
  const getSearch = async () => {
    setLoading(true)
    let path = `/library/video?page=${activePage}`;
    try {
      let resp = await doGet(path);
      if (resp.status === 200) {
        setData(resp.data)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return (
    <>
      <div className="list__wrapper">
        <div className="container-fluid">
          <div className="row wrapper__item">
            {!loading ?
              data?.data?.map((item, index) => {
                return (
                  <Item data={item} />
                )
              }) :
              <Loading />
            }
          </div>
        </div>
      </div>
      <div className="wrapper-paginate">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={9}
          totalItemsCount={parseInt(data?.totalPage)}
          pageRangeDisplayed={3}
          onChange={handleChangData}
        />
      </div>
    </>
  );
}
function Item({ data }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <ModalVideo show={modalShow} onHide={() => setModalShow(false)}
        videoId={convertToEmbed(data?.videoUrl)}
      />
      <div className="item" onClick={() => setModalShow(true)}>
        <div className="item__content--top">
          <img src={`https://i.ytimg.com/vi/${convertToEmbed(data?.videoUrl)}/hqdefault.jpg`} alt="" loading="lazy" />
        </div>
        <div className="item__content--bottom">
          <div className="label">
            <span>VIDEO</span>
          </div>
          <div className="title">{data?.name}</div>
        </div>
      </div>
    </>
  );
}
