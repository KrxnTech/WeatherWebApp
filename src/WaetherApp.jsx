import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        // DUMMY DATA !!
        city: "Japan",
        feelsLike: 18.11,
        humadity: undefined,
        temp: 19.05,
        tempMax: 19.05,
        tempMin: 19.05,
        weather: "haze"
    })

    let updateInfo = (result) => {
        setWeatherInfo(result)
    }

    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}