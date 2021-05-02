import React from 'react';
import Demo from '../component/home/Demo';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import '../style/home.scss'
export default function HomePage(){
    return(
        <div>
            <Header />
            <Demo />
            <Footer />
        </div>
    )
}