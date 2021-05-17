import React from 'react';
import InvestmentItem from './InvestmentItem';
import ModalInvestment from './ModalInvestment';
import '../../../../style/admin/investment.scss';

export default function Investment() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div className="wrapper-admin">
                <div className="title-investment">
                    <h1>Lĩnh vực đầu tư</h1>
                </div>
                <div className="add-btn">
                    <button onClick={() => setModalShow(true)}>+</button> 
                </div>
                <div className="container">
                    <div className="row">
                        <InvestmentItem />
                        <InvestmentItem />
                        <InvestmentItem />
                    </div>
                </div>
                <ModalInvestment
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </>
    )
}