import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox2() {

    const [city, setCity] = useState("")
    let API_URL = "https://api.openweathermap.org/data/2.5/weather" // API URL 
    let API_KEY = "e62957270b6c1cf93370b7660e8b0601" // API KEY 

    // NOW WE ARE GOING TO CREATE A FUNCTION WHICH WILL SELECT THE 
    // FILTERD INFO FROM API DATA TO SHOW ONLY THE MAIN INFO ⛅

    let getWeatherInfo = async () => {
        try {
            // URL 
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let JsonResponce = await response.json()
            console.log(JsonResponce)  // API WORK ✅

            let FILTER_RESULT = {
                city : city ,
                temp : JsonResponce.main.temp , 
                mintemp : JsonResponce.main.temp_min , 
                maxtemp : JsonResponce.main.temp_max , 
                humadity : JsonResponce.main.humadity ,
                feelslike : JsonResponce.main.feels_like ,
                weather : JsonResponce.weather[0].description
            }
            console.log(FILTER_RESULT)

        } catch (err) {
            console.log(err)
        }
    }



    let handleSubmit = (e) => {
        try {
            e.preventDefault()
            getWeatherInfo()
            setCity("") // INPUT RESET 
        } catch (err) {
            console.log(err)
        }
    }

    let handleChange = (e) => {
        setCity(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField value={city} onChange={handleChange} label="City Name 🏙️" variant="outlined" />
                <br />
                <br />
                <Button type="submit" variant="contained">Search ⛅</Button>
            </form>
        </div>
    )

}
