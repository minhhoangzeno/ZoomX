import React from 'react';
import { useHistory } from 'react-router';
import '../../style/style.scss';
export default function HeroHeader(){
    const history = useHistory()
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
                        <button onClick={() => history.push('/zoomx')}>XEM THÊM</button>
                    </div>
                </div>
                <div className="hero__overlay">
                </div>
            </div>
        </>
    )
}