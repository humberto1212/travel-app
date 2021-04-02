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

