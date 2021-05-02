import React from 'react';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';

export default function HomePage(){
    return(
        <div>
            <Header />
            <div style={{width:'100%',height:500}}>
            Home Page
            </div>
            <Footer />
        </div>
    )
}