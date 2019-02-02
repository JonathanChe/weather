require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post('/getWeather', (req, res) => {
  console.log('req', req.body)
  axios.get('https://www.metaweather.com/api/location/search/?query=san')
  .then(response => res.json(response.data));
});

app.listen(3000, () => console.log('listening on port 3000'));
