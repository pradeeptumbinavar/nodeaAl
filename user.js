let {db ,client} = require("../dbconfig");

async function addUser({name, age, phone}) {

    // console.log(db.client);
    const users= db.collection('users');
    const result = await users.insertOne({name,age,phone})
    return result.insertedId
//    let inserting = users.insertMany([{name:"anil",age:20},{name:"mahiboob",age:20},{name:"rakesh",age:20}])

//    console.log(inserting.id);

// let options = {sort:{name:1},projection : {_id:0,age:0}}


    // let getData = await users.find({},options).toArray()

    // console.log(getData);

}


async function getUsers() {

      // console.log(db.client);
      const users= db.collection('users');
      const result = await users.find()
      return result.toArray()
  //    let inserting = users.insertMany([{name:"anil",age:20},{name:"mahiboob",age:20},{name:"rakesh",age:20}])
  
  //    console.log(inserting.id);
  
  // let options = {sort:{name:1},projection : {_id:0,age:0}}
  
  
      // let getData = await users.find({},options).toArray()
  
      // console.log(getData);
    } 
   
  
module.exports = {
    addUser,
    getUsers
}
  