import React from "react";
import { doDelete } from "../../../../lib/DataSource";

export default function Item({ dataHero, indexNum, getHero, handleLoading }) {
  const deleteHero = async () => {
    handleLoading(true);
    const path = `/hero/contact/${dataHero._id}`;
    try {
      let resp = await doDelete(path);
      if (resp.status === 200) {
        handleLoading(false);
        getHero();
      }
    } catch (error) {
      console.log(error);
      handleLoading(false);
    }
  };

  return (
    <>
      <tr>
        <td className="text-center" style={{ verticalAlign: "middle" }}>
          {indexNum}
        </td>
        <td className="text-center" style={{ verticalAlign: "middle" }}>
          {dataHero?.title}
        </td>
        <td className="text-center" style={{ verticalAlign: "middle" }}>
          {dataHero?.label}
        </td>
        <td className="text-center" style={{ verticalAlign: "middle" }}>
          <img
            alt=""
            src={dataHero?.imageCover?.url}
            style={{ width: 200, height: "auto" }}
          />
        </td>
        <td style={{ verticalAlign: "middle" }} className="btn__setting">
          <button onClick={deleteHero}>
            <svg
              style={{ width: 24, height: 24 }}
              viewBox="0 0 24 24"
              color="#dc3545"
            >
              <path
                fill="currentColor"
                d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
              />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
}
