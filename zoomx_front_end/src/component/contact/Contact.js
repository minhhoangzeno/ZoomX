import React from 'react';
import '../../style/contact.scss'
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doGet } from '../../lib/DataSource'
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
export default function Contact() {
    let history = useHistory();
    const [data, setData] = useState(null); //tao 1 state data
    const [error, setError] = useState(null); //tao 1 state error
    const [loading, setLoading] = useState(false) //state loading
    useEffect(() => {
        getContact()
    }, []); //vua vao page se chay luon

    async function getContact() {
        const path = "/contact";
        const headers = {
            Accept: "*/*"
        }
        try {
            var resp = await doGet(path, headers);
            if (resp.status === 200) {
                setLoading(false)
                setData(resp.data)
            }
        } catch (e) {
            setError(e)
            setLoading(true)
        }
    }

    return (
        <div className="contact">
            <div className="container-fluid">
                <div className="row no-gutters">

                    {/* {data?.map((item) => {
                        return (
                            <ContactForm data={item} />
                            <ContactInfo data={item} />
                        )
                    })} */}
                    {data?.map((item, index) => {
                        return (
                            <ContactForm data={item} index={index + 1} />
                        )
                    })}
                    {data?.map((item, index) => {
                        return (
                            <ContactInfo data={item} index={index + 1} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}