const { db,client } = require("./mongoutil.js");

// // Replace the uri string with your connection string.
// const uri = "mongodb://localhost:27017";

// const client = new MongoClient(uri);
// exports.db = client.db('sathvik');


async function run() {
    try {
      const users = db.collection('users');
  
    

    //for insert one
    /*const userData = {
        name:"jerek",
        age:20,
        salary:20000,
    }*/

    // const userData =[ {
    //     name:"jerek",
    //     age:20,
    //     salary:20000,
    // }, {
    //     name:"wrek",
    //     age:25,
    //     salary:80000,
    // }, {
    //     name:"ek",
    //     age:27,
    //     salary:2000,
    // }]

    //const result=await users.insertOne(userData)

    //for many


    //<<for retrival....>>
    const options={
        sort:{name:1,age:-1},
        projection:{_id:0,age:0}
    }

    //for aplying options
    const query={
        salary:{$lt:3000},age:{$gt:25}
    }


    //const result=await users.find(query).toArray()
    const result=await users.find(query,options).toArray()

    console.dir(result)
  
      
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);