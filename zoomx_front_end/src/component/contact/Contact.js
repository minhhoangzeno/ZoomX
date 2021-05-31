import React from 'react';
import '../../style/contact.scss'

import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
export default function Contact() {
  
    return(
        <div className="contact">
            <div className="container-fluid">
                <div className="row no-gutters">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </div>
    )
}