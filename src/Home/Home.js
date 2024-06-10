
import React, { useState, useEffect } from 'react';
import cloud_3 from "./images/cloud_3.jpg"
import Datecom from '../Date';

const Home = () => {
    let [city, SetCity] = useState("");
    let [result, setResult] = useState("");

    const [date, setDate] = useState('');


    let getTemperature = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80a30e3be9db5b2242dcffeb43d01ae9`).then(
            resoponse => resoponse.json()
        ).then(data => {
            const kelvin = data.main.temp;
            const celsius = kelvin - 273.15
            setResult("Temperature" + " " + city + "   " + Math.round(celsius) + "°c");
            SetCity("")
        }).catch(error => console.log(error));

        setDate(new Date());
    }


    return (
        <>
            <div >
                <div className='w-98 bg-blue-700 p-10 text-white'>
                    <h1 className='text-center font-sans text-2xl font-bold '>Weather Report</h1>
                    <div className='mt-10'>
                        <div> <input type="text" value={city} onChange={(e) => { SetCity(e.target.value) }} className='border-2 border-black p-2 rounded-lg mb-5 w-46 text-black' /></div>
                        <div className='flex justify-center'><button className='px-6 py-4 bg-white text-black font-sans font-bold ' onClick={() => getTemperature()}>Get Temperature</button></div>

                    </div>

                </div >


            </div >

            <p className='text-center mt-10 font-sans font-semibold text-xl flex justify-between'>
                <div><img src={cloud_3} style={{ width: "50px", }} className='' />
                    <div>{result}</div> </div>

            </p>
            <Datecom />

        </>
    )
}

export default Home