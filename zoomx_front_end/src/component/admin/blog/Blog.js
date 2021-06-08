import React, { useEffect, useState } from "react";
import { doGet } from "../../../lib/DataSource";
import Item from "./Item";
import Loading from "../../image/Loading";
import ModalAdd from "./ModalAdd";
import Pagination from "react-js-pagination";
import SearchBlog from "./SearchBlog";
export default function Blog() {
  //data tra ve co {data,totalPage}
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  //modal Add
  const [modalShow, setModalShow] = useState(false);

  //tao bien select de update component {textSearch,activePage,categoryId}
  const [select, setSelect] = useState({
    textSearch: "",
    activePage: 1,
    categoryId: 1,
  });

  //chon danh muc bai viet va set lai gia tri textSearch
  const handleCategory = (id) => {
    setSelect({
      ...select,
      categoryId: id,
      activePage: 1,
      textSearch: "",
    });
  };
  //chon textSearch
  const handleTextSearch = (text) => {
    setSelect({
      ...select,
      textSearch: text,
    });
  };
  //chon activePage
  const handleActivePage = (item) => {
    setSelect({
      ...select,
      activePage: item,
    });
  };
  //thay doi Loading
  const handleLoading = (isLoading) => {
    setLoading(isLoading);
  };

  useEffect(() => {
    getSearch();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    async function fetchData() {
      let path = `/demo?page=${select.activePage}&q=${select.textSearch}&categoryId=${select.categoryId}`;
      const headers = {
        Accept: "*/*",
      };
      try {
        let resp = await doGet(path, headers);
        if (resp.status === 200) {
          setLoading(false);
          setData(resp.data);
        }
      } catch (error) {
        setLoading(false);
      }
    }
    fetchData();
  }, [select]); // eslint-disable-line react-hooks/exhaustive-deps

  const getSearch = async () => {
    setLoading(true);
    let path = `/demo?page=${select.activePage}&q=${select.textSearch}&categoryId=${select.categoryId}`;
    const headers = {
      Accept: "*/*",
    };
    try {
      let resp = await doGet(path, headers);
      if (resp.status === 200) {
        setLoading(false);
        setData(resp.data);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="title">
        <h1>Blog</h1>
      </div>

      <SearchBlog select={select} handleTextSearch={handleTextSearch} />

      <CategorySelect
        handleCategory={handleCategory}
        getSearch={getSearch}
        handleLoading={handleLoading}
        select={select}
      />

      <div className="wrapper__table">
        <section className="content-header">
          <div className="button__add">
            <button onClick={() => setModalShow(true)}>
              <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                />
              </svg>
            </button>
          </div>
        </section>
        <div className="box-body">
          <table id="example1" className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-center" style={{ verticalAlign: "middle" }}>
                  STT
                </th>
                <th className="text-center" style={{ verticalAlign: "middle" }}>
                  Tieu de
                </th>
                <th className="text-center" style={{ verticalAlign: "middle" }}>
                  Ngay viet
                </th>
                <th className="text-center" style={{ verticalAlign: "middle" }}>
                  Danh muc bai viet
                </th>
                <th className="text-center" width="12%">
                  Setting
                </th>
              </tr>
            </thead>
            <ModalAdd
              show={modalShow}
              onHide={() => setModalShow(false)}
              handleLoading={handleLoading}
              getSearch={getSearch}
            />
            {!loading ? (
              <tbody>
                {data?.data.map((item, index) => {
                  return (
                    <Item
                      data={item}
                      key={index}
                      handleLoading={handleLoading}
                      indexNum={parseInt(
                        5 * (select?.activePage - 1) + index + 1
                      )}
                      getSearch={getSearch}
                    />
                  );
                })}
              </tbody>
            ) : (
              <Loading />
            )}
          </table>
        </div>
      </div>
      <div className="wrapper-paginate">
        <Pagination
          activePage={select.activePage}
          itemsCountPerPage={5}
          totalItemsCount={parseInt(data?.totalPage)}
          pageRangeDisplayed={3}
          onChange={(item) => handleActivePage(item)}
        />
      </div>
    </>
  );
}

function CategorySelect({ handleCategory, select }) {
  const [categoryBlog, setCategoryBlog] = useState();
  useEffect(() => {
    getCategory();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const getCategory = async () => {
    const path = "/categoryblog";
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setCategoryBlog(resp.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <label htmlFor="cars">Chon danh muc bai viet:</label>
      <select
        name="category"
        onChange={(e) => {
          handleCategory(e.target.value);
        }}
        value={select?.categoryId}
        style={{
          border: "1px solid #eaeaea",
          padding: 10,
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        <option value={1}>Tat ca</option>
        {categoryBlog?.map((item, idx) => {
          return (
            <option key={idx} value={item._id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
