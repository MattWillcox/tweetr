"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {
    // Saves a tweet to `db`

    saveTweet: function(newTweet, callback) {
        db.collection("tweets").insertOne(newTweet);
        callback(null, true);
    },
    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
        db.collection('tweets').find().toArray((err, data) => {
          callback(null, data);
      });
    }
  };
};
