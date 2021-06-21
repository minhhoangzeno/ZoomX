import React, { useEffect, useState } from "react";
import iconNav from "../../image/home/librarypage/icon-menu.png";
import { doGet } from "../../lib/DataSource";

export default function MenuProject({ handleInvestment, investmentId }) {
  const [investment, setInvestment] = useState();
  useEffect(() => {
    getInvestment();
  }, []);
  const getInvestment = async () => {
    let path = "/investment";
    try {
      let resp = await doGet(path);
      if (resp.status === 200) {
        setInvestment(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="menu__wrapper">
        <div className="container-fluid">
          <ul className="menu__project">
            {investment?.map((item, idx) => {
              return (
                <li
                  onClick={() => {
                    handleInvestment(item._id);
                  }}
                >
                  <img src={iconNav} alt="" />
                  <div>
                    {item?.investmentName} /
                    {item._id === investmentId ? (
                      <div className="active-cpn"></div>
                    ) : (
                      <></>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
