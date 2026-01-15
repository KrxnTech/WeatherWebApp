import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import './infoBox.css';


export default function InfoBox({ info }) {



    // EXTRA FEATURES WORKING ... 
    const HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWep2ksEeFSVzge3lGrqvMEUoW1bQLYzYXvw&s"
    const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbluH5QpmXLJ1uyQul4lM6CSs6aUBYuHWQQ&s"
    const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq58x5FWbmFkIBsjsfeT8YxPOS5rmeefO8TQ&s"


    // EXTRA ICONS FEATURE 
    const HOT_ICON = <SunnyIcon style={{ color: "orange", fontSize: "2rem" }} />
    const COLD_ICON = <AcUnitIcon style={{ color: "blue", fontSize: "2rem" }} />
    const RAIN_ICON = <WaterDropIcon style={{ color: "white", fontSize: "2rem" }} />


    const style_1 = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    
    return (
        <div>
            <br />

            <p>Weather Broadcasting Example 💓</p>
            <div style={style_1}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        // image="https://images.unsplash.com/photo-1579003593419-98f949b9398f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMGZvcmVjYXN0aW5nfGVufDB8fDB8fHww"
                        image={
                            info.humidity > 80 // CONDITION 1 
                                ? RAIN_URL :
                                info.temp > 15 // CONDITION 2 
                                    ? HOT_URL
                                    : COLD_URL
                        }

                    />
                    <CardContent style={ info.humidity > 80 ? {backgroundColor: "#1e3a5f"} : info.temp > 15 ? {backgroundColor: "#fde68a"} : {backgroundColor: "#e0f2fe"} }>
                        <Typography style={{ fontFamily: "Sour Gummy" }} gutterBottom variant="h5" component="div">
                            {info.city} <p>{info.humidity > 80 ? RAIN_ICON : info.temp > 15 ? HOT_ICON : COLD_ICON}</p>
                        </Typography>
                        <Typography component={"span"} variant="body2" sx={{ color: 'text.secondary' }}>
                            <div>Temperature : <b>{info.temp}</b>&deg;</div>
                            <div>Max_Temperature : <b>{info.tempMax}</b>&deg;</div>
                            <div>Min_Temperature : <b>{info.tempMin}</b>&deg;</div>
                            <div>The Weather can be described as <b style={{ color: "blue" }}>{info.weather}</b> and feels like <b>{info.feelsLike}</b>&deg;</div>
                            <div id="TWO_MORE_DATA">
                                <div id="WIND_SPEED">Wind Speed 🍃 : {info.wind} m/s</div>
                                <div id="WIND_DEGREE">Wind Degree : {info.windDeg}°</div>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}