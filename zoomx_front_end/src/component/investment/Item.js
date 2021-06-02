import React from 'react';
export default function Item({ data, index }) {
    return (
        <>
            {index % 2 == 0 ?
                <div className="row investment__row--first">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 col-img col-investment">
                        <div className="img-wrapper">
                            <div className="bg-inner"></div>
                            <img src={data.imageCover.url} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 col-content col-investment">
                        <div className="content-wrapper">
                            <strong>0{index}</strong><span>/</span>
                            <h2>{data.investmentName}</h2>
                            <p>{data.description}</p>
                            <a href="http://www.github.com" className="read-more-btn" >XEM THÊM</a>
                        </div>
                    </div>
                </div>
                :
                <div className="row investment__row--second">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 col-img col-investment">
                        <div className="img-wrapper">
                            <div className="bg-inner"></div>
                            <img src={data.imageCover.url} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 col-content col-investment">
                        <div className="content-wrapper">
                            <strong>0{index}</strong><span>/</span>
                            <h2>{data.investmentName}</h2>
                            <p>{data.description}</p>
                            <a href="http://www.github.com" className="read-more-btn" >XEM THÊM</a>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}