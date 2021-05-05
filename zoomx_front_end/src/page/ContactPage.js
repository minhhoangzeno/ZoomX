import React from 'react';
import LeftContact from '../component/contact/LeftContact';
import RightContact from '../component/contact/RightContact';
import Footer from '../component/share/Footer';
import Header from '../component/share/Header';
import '../style/contact.scss'
export default function ContactPage(){
    return(
        <>
        <Header />
            <LeftContact>
            </LeftContact>
            <RightContact />
        <Footer />
        </>
    )
}