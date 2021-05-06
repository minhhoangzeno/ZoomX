import React from 'react';
import '../../style/style.scss';
export default function HeroHeader(){
    return(
        <>
            <div className="hero">
                <div className="container-fluid hero__content">
                    <div className="hero__content--top">
                        WELCOME TO ZOOMX HOTELS
                    </div>
                    <div className="hero__content--mid">
                        Difference in every second
                    </div>
                    <div className="hero__content--bottom">
                        <button>XEM THÊM</button>
                    </div>
                </div>
                <div className="hero__overlay">
                </div>
            </div>
        </>
    )
}