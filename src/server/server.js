import {datePlan} from '../server/dateTravel.js'

let travelData = [ ];

let formatDistanceStrict = require('date-fns/formatDistanceStrict')

const fetch = require('node-fetch')

//For environment variables
const dotenv = require('dotenv');
dotenv.config();

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
const port = 8081;

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
const UrlWeather16 = "http://api.weatherbit.io/v2.0/forecast/daily?"
const UrlPix = "https://pixabay.com/api/?";
const Urlcountry = "https://restcountries.eu/rest/v2/name/"

//API Keys:
const GeoKey = process.env.KEY_GEO;
const WeatherKey = process.env.KEY_WEATHER;
const PixKey = process.env.KEY_PIX;

//current date for comparison
const d = new Date();
const dayActual = d.getDate();
const dayActual_6 = d.getDate()+6;
const dayActual_16 = d.getDate()+16;
const monthActual = d.getMonth() + 1;
const yearActual = d.getFullYear();
const fullYearActual = yearActual + "-" + monthActual + "-" + dayActual
const fullYearActual_6 = yearActual + "-" + monthActual + "-" + dayActual_6 
const fullYearActual_16 = yearActual + "-" + monthActual + "-" + dayActual_16


// Post request
app.post('/travel', async function(req, res){
    const {location, date } = req.body

    const { yearPlan, monthPlan, dayPlan, fullYearPlan} = datePlan(date);
    
    console.log(fullYearPlan)

    //Location API
    const respLocation = await fetch (UrlGeo+location+"&maxRows=1&username="+GeoKey)
    try {
        const dataLocation = await respLocation.json();

        const cordinates = dataLocation.geonames[0];
        const { lng } = cordinates
        const { lat } = cordinates
        const { countryName } = cordinates

        const cordinatesResults = {
            lng,
            lat,
            countryName   
        }
        
        console.log(dataLocation);    
        travelData.unshift(cordinatesResults);
         
            //****** Wather API ******* 
            // if the planned date is not more than 6 days away from the actual date
            if (fullYearPlan <=  fullYearActual_6 && fullYearActual <= fullYearPlan ) {
           
                const respWeather = await fetch (UrlWeatherNow+"&"+"lat="+lat+"&"+"lon="+lng+"&key="+WeatherKey)
                try {
                    const dataWeather = await respWeather.json();

                    const weather = dataWeather.data[0]
                    const { temp } = weather 

                    const weatherResults = {
                        temp
                    }
                    console.log("temperatura actual")
                    console.log(dataWeather)
                    travelData.unshift(weatherResults)
               
                }catch(error){
                    console.log('error', error)
                }
            // if the planned date is not more than 16 days away from the actual date    
            }else if(fullYearPlan <= fullYearActual_16 && fullYearActual <= fullYearPlan ){
                const respWeather = await fetch (UrlWeather16+"&"+"lat="+lat+"&"+"lon="+lng+"&key="+WeatherKey)
                try {
                    const dataWeather = await respWeather.json();

                    //days away - to calculate the position within the array
                    let difference = formatDistanceStrict(new Date(fullYearActual),new Date(fullYearPlan))
                    let daysLeft = difference.split(" ")[0]
                    console.log(daysLeft)

                    const weather = dataWeather.data[daysLeft]
                    const { temp } = weather 

                    const weatherResults = {
                        temp
                    }
                    console.log("temperatura pronostico")
                    console.log(dataWeather)
                    travelData.unshift(weatherResults)
               
                }catch(error){
                    console.log('error', error)
                }
            // if the planned date is to far away    
            }else if(fullYearPlan > fullYearActual_16){
                const temp = "N/A"

                const weatherResults = {
                    temp
                }

                travelData.unshift(weatherResults)

            // if the planned date has already happened    
            }else{
                const temp = "N/A"

                const weatherResults = {
                    temp
                }

                travelData.unshift(weatherResults)
            }

    }catch(error){
        console.log('error', error)
    }
})   
