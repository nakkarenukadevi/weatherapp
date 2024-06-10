import React from 'react'
import image_2 from "./Home/images/image_2.jpg"
import Home from './Home/Home'


const Weather = () => {
    return (
        <div class="min-h-screen flex items-center justify-center bg-fixed  bg-cover bg-center" style={{ backgroundImage: `url(${image_2})`, backgroundRepeat: 'no-repeat', width: "100%", height: "900px " }}>
            <div>
                <Home />
            </div>
        </div>
    )
}

export default Weather