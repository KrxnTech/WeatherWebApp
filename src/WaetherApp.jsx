import { useState } from "react";
import DarkLight from "./DarkLight";
import "./WeatherApp.css"

// IMPORTED 2 FILES 
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        // DUMMY DATA !!
        city: "Japan",
        feelsLike: 18.11,
        humadity: 75,
        temp: 19.05,
        tempMax: 19.05,
        tempMin: 19.05,
        weather: "haze",
        // MINOR ADDITION 
        wind: 3.2,
        windDeg: 250,
    })

    let updateInfo = (result) => {
        setWeatherInfo(result)
    }

    return (
        <div>
            <div className="TOP_NAV">
                <div>change Mode : </div>
                <div><DarkLight/></div>
            </div>
            <h2>Weather App 🌦️ <p style={{fontSize : "15px"}}>See Real Time Weather and more information about Weather 😉</p></h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}