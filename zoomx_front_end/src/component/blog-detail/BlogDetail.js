import React, { useEffect, useState } from 'react';
import '../../style/blog-detail.scss'
import Img from '../../image/investment/img.png'
import { doGet } from '../../lib/DataSource';

export default function BlogDetail() {
    const [data,setData] = useState();
    useEffect(() => {
        getSearch()
    },[])
    const getSearch = async () => {
        let path = "/blogs";
        try {
            let resp = await doGet(path);
            if(resp.status === 200){
                setData(resp.data)
            }
        } catch (error) {
            
        }
    }
    console.log(data)
    return (
        <>
            <div className="blog-detail__wrapper" dangerouslySetInnerHTML={{ __html: data[4]?.content }}>
               
            </div>
        </>
    )
}