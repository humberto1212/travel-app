# travel-app
The app displays a weather forecast and country information.
The functionality is that the user enters a location and an upcoming travel date, then the web application will provide information about the country the user wants to travel to and the temperature for the selected date.

## API's 
### This project makes use of: 
[Geonames](http://www.geonames.org/export/web-services.html) -
[Weatherbit](https://www.weatherbit.io/account/create) -
[Pixabay](https://pixabay.com/api/docs/) -
[Restcountries](https://restcountries.eu/) 

## Specifications
### The project was written with:
- HTML5 

- Saas

- Vanilla JS

- Node.js & Express environment

- Webpack

- Service workers

- Jest

### Dependencies:
`"@types/date-fns": "^2.6.0"` -
    `"body-parser": "^1.19.0"` -
    `"cors": "^2.8.5"` -
    `"date-fns": "^2.20.1"` -
    `dotenv": "^8.2.0"` -
    `express": "^4.17.1"` -
    `node-fetch": "^2.6.1"`
### devDependencies:
`"@babel/core": "^7.13.14"` -
    `"@babel/preset-env": "^7.13.12"` -
    `"babel-loader": "^8.2.2"` -
    `"clean-webpack-plugin": "^3.0.0"` -
    `"css-loader": "^5.2.0"` -
    `"html-webpack-plugin": "^5.3.1"` -
    `"jest": "^26.6.3"` -
    `"mini-css-extract-plugin": "^1.4.0"` -
    `"node-sass": "^5.0.0"` -
    `"optimize-css-assets-webpack-plugin": "^5.0.4"` -
    `"sass-loader": "^11.0.1"` -
    `"style-loader": "^2.0.0"` -
    `"terser-webpack-plugin": "^5.1.1"` -
    `"webpack": "^5.28.0"` -
    `"webpack-cli": "^4.6.0"` -
    `"webpack-dev-server": "^3.11.0"`
    
## Installation

#### Step 1: Signup for an API key

- Go to [Geonames](http://www.geonames.org/export/web-services.html), [Weatherbit](https://www.weatherbit.io/account/create), [Pixabay](https://pixabay.com/api/docs/), [Restcountries](https://restcountries.eu/)  and get your API key.
- Create an `.env` file and add the API_KEY in this file.

#### Step 2: Deployment

- Clone or Download this repo

- `cd` into your new folder and run:

- `npm install` You can use this command for starting a project. npm install downloads a package and it's dependencies

- `npm run dev` to start the webpack dev server on port 8080

- `npm run prod` to generate a dist folder for prod

- `npm start` to run the Express server on port 8081

## Image

<img width="598" alt="Captura de Pantalla 2021-04-28 a la(s) 9 16 07 p  m" src="https://user-images.githubusercontent.com/71103179/116460217-17d70f00-a867-11eb-9aec-da905d1dfd37.png">


