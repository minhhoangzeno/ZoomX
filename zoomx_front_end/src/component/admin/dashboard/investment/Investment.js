import React from 'react';
import InvestmentItem from './InvestmentItem';
import ModalInvestment from './ModalInvestment';
export default function Investment() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            Linh vuc dau tu
            <button onClick={() => setModalShow(true)}>Them</button>
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
        </>
    )
}