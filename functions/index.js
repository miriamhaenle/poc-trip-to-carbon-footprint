const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { request } = require('http');
const { query } = require('express');
const { object } = require('firebase-functions/lib/providers/storage');
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

admin.initializeApp();
app.get('/hello-world', (request, response) => {
  return response.status(200).send('Hello world!');
});

app.get('/my-carbon-footprint', (request, response) => {
  const requestParams = request.query;
  console.log({ requestParams });
  const footprint = axios
    .get('https://api.triptocarbon.xyz/v1/footprint', {
      params: {
        activity: requestParams.activity,
        activityType: requestParams.activityType,
        country: requestParams.country,
        mode: requestParams.mode,
      },
    })
    .then((response) => response.data)
    .then((footprint) => response.status(200).send(console.log(footprint)))
    .catch((error) => console.log(error));
});

exports.app = functions.region('europe-west3').https.onRequest(app);
