const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
// http://localhost:5000/node-pritam/us-central1/helloWorld

// https://itnext.io/running-express-js-on-firebase-cloud-functions-a20b536c6aec
// https://codeburst.io/express-js-on-cloud-functions-for-firebase-86ed26f9144c


const cors = require("cors")
const express = require("express")

/* Express with CORS */
const app2 = express()
app2.use(cors({ origin: true }))


app2.get("/express", (request, response) => {
    response.send("Hello from Express on Firebase with CORS!  @ " + new Date())
})
const api2 = functions.https.onRequest(app2)
// http://localhost:5000/node-pritam/us-central1/api2/express

module.exports = {
    helloWorld,
    api2
}

// Project Workspace
// https://console.firebase.google.com/u/2/project/node-pritam/functions

// https://us-central1-node-pritam.cloudfunctions.net/helloWorld
// https://us-central1-node-pritam.cloudfunctions.net/api2/express

// Production server log - https://console.firebase.google.com/u/2/project/node-pritam/functions/logs?functionFilter=api2(us-central1)&severity=DEBUG

