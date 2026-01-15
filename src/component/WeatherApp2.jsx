import { useState } from "react";
import SearchBox2 from "./SearchBox2";
import InfoBox2 from "./infoBox2";

export default function WeatherApp2() {

    // FROM HERE WE ARE SENDING DUMMY DATA TO INFOBOX2
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Japan 🌸" ,
        feelsLike : 18.11 ,
        humadity : undefined ,
        temp : 19.05 ,
        tempMax : 19.05 ,
        tempMin : 19.05 ,
        weather : "Haze ⛅"
    })

    let updateInfo = (FILTERED_INFO) => {
        setWeatherInfo(FILTERED_INFO)
    }

    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox2 updateInfo={updateInfo}/>
            <InfoBox2 info={weatherInfo}/>
        </div>
    )

}

// NOW OUR MAIN MOTIVE IS TO MAKE IT REAL TIME API CONSOLE LEVEL TO UI LEVEL SHOWING INFO !!!