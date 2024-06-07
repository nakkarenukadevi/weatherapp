
import React, { useEffect, useState } from 'react'

const Home = () => {
    let [city, SetCity] = useState("");
    let [result, setResult] = useState("")


    let getTemperature = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80a30e3be9db5b2242dcffeb43d01ae9`).then(
            resoponse => resoponse.json()
        ).then(data => {
            const kelvin = data.main.temp;
            const celsius = kelvin - 273.15
            setResult("Temperature" + " " + city + ' ' + Math.round(celsius));
            SetCity("")
        }).catch(error => console.log(error))

    }

    return (
        <div className='bg-blue-800 text-white font-bold text-2xl rounded-lg flex justify-center p-10 mx-auto mt-20 w-1/4 h-96 '>
            <div>
                <h1 className='text-3xl mb-9 text-center '>Weather Report</h1>
                <div >
                    <div> <input type="text" value={city} onChange={(e) => { SetCity(e.target.value) }} className='border-2 border-black p-3 rounded-lg mb-5 w-56 text-black' /></div>
                    <div className='flex justify-center'><button className='px-4 py-4 bg-blue-600 text-white font-sans font-bold ' onClick={() => getTemperature()}>Get Temperature</button></div>
                    <h1>{result}</h1>
                </div>

            </div>

        </div>
    )
}

export default Home