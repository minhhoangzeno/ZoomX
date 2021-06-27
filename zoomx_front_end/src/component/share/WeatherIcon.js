import React, { useEffect, useState } from 'react';
import { doGet } from '../../lib/DataSource';
export default function WeatherIcon() {
    const [icon, setIcon] = useState();

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let fetchData = () => {
        fetch("http://api.weatherapi.com/v1/current.json?key=17a98bf64f10464eab2163300212606&q=Hanoi", requestOptions)
            .then(response => response.text())
            .then(result => setIcon(JSON.parse(result).current.condition.icon))
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <img src={icon} alt="" className="icon-weather" />

        </>
    )
}