import React, { useEffect, useState } from 'react';
import { doGet } from '../../lib/DataSource';
export default function WeatherIcon() {
    const [icon, setIcon] = useState();
    // useEffect(() => {
    //     async function fetchData() {
    //         let path = "https://community-open-weather-map.p.rapidapi.com/weather?q=Hanoi&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html";
    //         let headers = {
    //             'x-rapidapi-key': '8aa1bdef98mshed9f7f5003b6d82p193e44jsn7ded3e81a66a',
    //             'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    //         };
    //         try {
    //             let resp = await doGet(path, headers);
    //             if (resp.status === 200) {
    //                 setIcon(resp.data)
    //             }
    //         } catch (error) {

    //         }
    //     }
    //     fetchData()
    // }, [])

    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "8aa1bdef98mshed9f7f5003b6d82p193e44jsn7ded3e81a66a");
    myHeaders.append("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    let fetchData = () => {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Hanoi&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", requestOptions)
            .then(response => response.text())
            .then(result => console.log(setIcon(JSON.parse(result.replace('(', '').replace(')', '').replace('test', '')))))
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <>
            <img src={`http://openweathermap.org/img/wn/${icon?.weather?.[0]?.icon}@2x.png`} alt="" className="icon-weather" />

        </>
    )
}