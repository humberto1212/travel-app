const fetch = require('node-fetch')

// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//local server
const port = 8000;

const server = app.listen(port, listening);

function listening() {
    console.log(`running on localhost: ${port}`);
}

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

//URLs:
const UrlGeo = "http://api.geonames.org/searchJSON?q=";
const UrlWeatherNow = "http://api.weatherbit.io/v2.0/current?";
const UrlWeather16 = "http://api.weatherbit.io/v2.0/forecast/daily"
const UrlPix = "";

//API Keys:
const GeoKey = process.env.KEY_GEO;
const WeatherKey = process.env.KEY_WEATHER;

app.post('/travel', async function(req, res){
   const {location, date } = req.body
   const respLocation = await fetch (UrlGeo+location+"&maxRows=1&username="+GeoKey)
   try {
       const data = await respLocation.json();

       const cordinates = data.geonames[0];
       const { lng } = cordinates
       const { lat } = cordinates
       const { countryName } = cordinates

       const cordinatesResults = {
           lng,
           lat,
           countryName   
       }

       console.log(data); 
       res.send(travelData);

           //Wather Api  
           const respWeather = await fetch (UrlWeatherNow+"&"+"lat="+lat+"&"+"lon="+lng+"&key="+WeatherKey)
           try {
               const dataWeather = await respWeather.json();
               console.log(dataWeather)

           }catch(error){
               console.log('error', error)
           }
        
   }catch(error){
       console.log('error', error)
   }
})   
