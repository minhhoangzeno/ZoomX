import React from "react";
import Img from "../../../../image/investment/img.png";
import ModalInvestment from "./ModalInvestment";

export default function InvestmentItem() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="col-4">
        <div>
          <button onClick={() => setModalShow(true)}>Sua</button>
          <button>Xoa</button>
        </div>
        <div>
          <img style={{ width: 200, height: 200 }} src={Img} />
        </div>
        <div>
          <h1>01/</h1>
          <h2>KHÁCH SẠN</h2>
          <p>
            Là một trong những thương hiệu dẫn đầu trong ngành khách sạn du lịch
            nghỉ dưỡng tại Việt Nam, Tập đoàn FLC sở hữu hệ…
          </p>
        </div>
      </div>
      <ModalInvestment show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
