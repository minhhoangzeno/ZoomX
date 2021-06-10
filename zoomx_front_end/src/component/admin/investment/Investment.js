import React, { useEffect, useState } from "react";
import { doGet } from "../../../lib/DataSource";
import Loading from "../../image/Loading";
import Item from "./Item";
import ModalAdd from "./ModalAdd";

export default function Investment() {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getInvestment();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLoading = (isLoading) => {
    setLoading(isLoading);
  };

  const getInvestment = async () => {
    const path = `/investment-all`;
    const headers = {
      Accept: "*/*",
    };
    try {
      var resp = await doGet(path, headers);
      if (resp.status === 200) {
        setData(resp.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="title">
        <h1>Lĩnh vực đầu tư</h1>
      </div>
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
                  Tên dự án
                </th>
                <th className="text-center" style={{ verticalAlign: "middle" }}>
                  Mô tả
                </th>
                <th className="text-center" style={{ verticalAlign: "middle" }}>
                  Ảnh cover
                </th>
                <th className="text-center" style={{ verticalAlign: "middle" }}>
                  Trạng thái
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
              getInvestment={getInvestment}
            />
            {!loading ? (
              <tbody>
                {data?.map((item, index) => {
                  return (
                    <Item
                      dataInvestment={item}
                      key={index}
                      handleLoading={handleLoading}
                      indexNum={index + 1}
                      getInvestment={getInvestment}
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
    </>
  );
}
