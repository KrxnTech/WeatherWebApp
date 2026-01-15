import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useActionState, useState } from 'react';


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("") // FUNCTION KE PASS ACCESS RAHEGI !!!
    let [err, setErr] = useState(false)
    let API_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "e62957270b6c1cf93370b7660e8b0601"

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let JsonResponse = await response.json()


            // FILTER DATA FOR MAIN WORK 
            let result = {
                city: city,
                temp: JsonResponse.main.temp,
                tempMin: JsonResponse.main.temp_min,
                tempMax: JsonResponse.main.temp_max,
                humadity: JsonResponse.main.humadity,
                feelsLike: JsonResponse.main.feels_like,
                weather: JsonResponse.weather[0].description,

            }

            // console.log(result) 
            return result
        } catch (err) {
            // setErr(err) 
            throw err
        }

    }


    let handleChange = (e) => {
        setCity(e.target.value)
    }

    let handleSubmit = async (e) => {
        try {
            e.preventDefault()
            let newInfo = await getWeatherInfo()
            updateInfo(newInfo)
            setCity("")
        } catch (err) {
            setErr(true)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField onChange={handleChange} value={city} id="city" label="City Name" variant="outlined" required />
                <br />
                <br />
                <Button variant="contained" type="submit">Search</Button>
                {err && <p style={{ color: "red" }}>No such place in our API !!</p>}
            </form>
        </div>
    )
}