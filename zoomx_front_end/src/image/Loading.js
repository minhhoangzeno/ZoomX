import React from 'react';
import loadingGif from './loadingGif.gif'
export default function Loading(){
    return(
        <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
            <img style={{width:'10%'}} src={loadingGif} alt="" />
        </div>
    )
}