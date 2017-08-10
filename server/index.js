"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const MongoClient   = require("mongodb").MongoClient;
const dataHelpers   = require("./lib/data-helpers.js");
const tweetsRoutes       = require("./routes/tweets");
const app           = express();
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  app.use("/tweets", tweetsRoutes(dataHelpers(db)));

});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

