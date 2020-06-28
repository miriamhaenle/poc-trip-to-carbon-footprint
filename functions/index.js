const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');

const app = express();
app.use(express.json());

admin.initializeApp();

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.post('/', (request, response) => {
  const testCollection = admin.firestore().collection('test');
  let message = 'No entry was added';
});

exports.api = functions.region('europe-west3').https.onRequest(app);

/*
exports.helloWorld = functions
  .region('europe-west3')
  .https.onRequest((request, response) => {
    response.send('Hello from the other side !');
  });

exports.add = functions
  .region('europe-west3')
  .https.onRequest(async (request, response) => {
    const testCollection = admin.firestore().collection('test');
    let message = 'No entry was added';

    if (request.query.name && request.query.age) {
      await testCollection.add({
        name: request.query.name,
        age: request.query.age,
      });

      message = 'Added one entry to test collection';
    }

    return response.json({
      message,
    });
  });

exports.getAll = functions
  .region('europe-west3')
  .https.onRequest(async (request, response) => {
    const testCollection = admin.firestore().collection('test');

    const snapshot = await testCollection.get();
    let data = [];
    snapshot.forEach((doc) => data.push(doc.data()));

    return response.json({
      message: 'Added one entry to test collection',
      data,
    });
  });

exports.getTeenager = functions
  .region('europe-west3')
  .https.onRequest(async (request, response) => {
    const testCollection = admin.firestore().collection('test');
    const query = await testCollection
      .where('age', '<', '20')
      .select('name', 'age');
    const snapshot = await query.get();

    let data = [];
    snapshot.forEach((doc) => data.push(doc.data()));

    return response.json({
      message: 'Added one entry to test collection',
      data,
    });
  });
*/
