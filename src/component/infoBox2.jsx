import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox2({ info }) {

    return (
        <div>
            <p>Wheater Broadcasting Example 🌩️</p>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?cs=srgb&dl=pexels-tahir-shaw-50609-186980.jpg&fm=jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <div>Temperature : <b>{info.temp}</b>&deg;c</div>
                        <div>Min - Temperature : <b>{info.mintemp}</b>&deg;</div>
                        <div>Max - Temperature : <b>{info.maxtemp}</b>&deg;</div>
                        <div>Feels Like : <b>{info.feelslike}</b>&deg;</div>
                        <div>The Weather can be describe as <b style={{ color: 'blue' }}>{info.weather}</b> and feels like <b>{info.feelsLike}</b>&deg;</div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )

}