import React, { useEffect, useState } from "react";
import ModalImage from "./ModalImage";
import Loading from '../../image/Loading';
import { doGet } from '../../../lib/DataSource'
import Pagination from "react-js-pagination";

export default function LibraryImage() {
  const [data, setData] = useState();
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getSearch();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    getSearch();
  }, [activePage]) // eslint-disable-line react-hooks/exhaustive-deps
  const handleChangData = (item) => {
    setActivePage(item)
  }
  const getSearch = async () => {
    setLoading(true)
    let path = `/library/image?page=${activePage}`;
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
      <ModalImage show={modalShow} onHide={() => setModalShow(false)} listImage={data?.imageList} />
      <div className="item" onClick={() => setModalShow(true)}>
        <div className="item__content--top">
          <img src={data?.imageCover?.url} alt="" loading="lazy" />
        </div>
        <div className="item__content--bottom">
          <div className="label">
            <span>HÌNH ẢNH</span>
          </div>
          <div className="title">{data?.name}</div>
        </div>
      </div>
    </>
  );
}
