import React from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import MetaTags from 'react-meta-tags';
import TimeLine from '../component/home/TimeLine';
import '../style/home.scss'
import HeroHeader from '../component/share/HeroHeader';
export default function HomePage() {
    return (
        <div>
            <MetaTags>
                <title>Trang chủ</title>
            </MetaTags>
            <Header />
            <HeroHeader />
            <div style={{ width: '100%', height: 500 }}>
                Home Page
           
                <svg xmlns="http://www.w3.org/2000/svg" width="13.685" height="13.64" viewBox="0 0 13.685 13.64">
                    <g id="Group_497" data-name="Group 497" transform="translate(-1557.457 -1182.554)">
                        <path id="Path_182" data-name="Path 182" d="M1601.025,1185.414a4.056,4.056,0,0,1,2.564,2.607h2.926a6.658,6.658,0,0,0-1.911-3.579,6.571,6.571,0,0,0-3.578-1.888Z" transform="translate(-35.373 0)" fill="#e01042" />
                        <path id="Path_183" data-name="Path 183" d="M1560.382,1188.028a4.055,4.055,0,0,1,2.564-2.607v-2.858a6.908,6.908,0,0,0-5.49,5.465Z" transform="translate(0 -0.007)" fill="#e01042" />
                        <path id="Path_184" data-name="Path 184" d="M1562.947,1228.609a4.056,4.056,0,0,1-2.564-2.607h-2.926a6.908,6.908,0,0,0,5.49,5.465Z" transform="translate(0 -35.276)" fill="#e01042" />
                        <path id="Path_185" data-name="Path 185" d="M1603.589,1226a4.057,4.057,0,0,1-2.564,2.607v2.86a6.573,6.573,0,0,0,3.578-1.889,6.658,6.658,0,0,0,1.911-3.579Z" transform="translate(-35.373 -35.276)" fill="#e01042" />
                    </g>
                </svg>

            </div>
            <TimeLine />
            <Footer />
        </div>
    )
}
