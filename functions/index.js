const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { request } = require('http');
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

admin.initializeApp();
app.get('/hello-world', (request, response) => {
  return response.status(200).send('Hello world!');
});

exports.app = functions.region('europe-west3').https.onRequest(app);

axios
  .get(
    'https://api.triptocarbon.xyz/v1/footprint?activity=186&activityType=miles&country=def&mode=dieselCar'
  )
  .then((response) => response.data)
  .then((footprint) => console.log(footprint))
  .catch((error) => console.log(error));
