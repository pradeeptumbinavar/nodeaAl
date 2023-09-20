const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

const database = client.db('student-marks');
const db = database


module.exports = {db,client}