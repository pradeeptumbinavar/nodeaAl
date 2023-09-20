const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri,{useUnifiedTopology:true});
const db = client.db('sathvik');

module.exports = {db,client}

