import React from 'react';
import { useEffect, useState } from 'react';
import hotel from '../../image/contact/hotel.png'
import { useContact } from '../../lib/API';
export default function ContactInfo() {
    
    const {data} = useContact()
    return (
        
        <div className="contact__info">
            <img src={data?.[0]?.imageCover?.url} alt="" />
            <div className="contact__info--basic">
                <div className="row">
                    <div className="col-md-6">
                        <p><strong>Địa chỉ: </strong><span>{data?.[0]?.address}</span></p>
                        <p><strong>Thành phố: </strong><span>{data?.[0]?.city}</span></p>
                    </div>
                    <div className="col-md-6">
                        <p><strong>Điện thoại: </strong><span>{data?.[0]?.numberPhone}</span></p>
                        <p><strong>Email: </strong><span>{data?.[0]?.email}</span></p>
                    </div>
                </div>
            </div>
            <div className="contact__info--hotline">
                <span>HOTLINE({data?.[0]?.timeHotline})</span>
                <br />
                <div className="hotline--number"><strong>{data?.[0]?.numberHotline}</strong></div>
            </div>
        </div>
    )
}