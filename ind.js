
const express = require("express")
const userdb = require("./models/user.js")

const app = express();
app.use(express.json())

app.get("/users",async (req,res)=>{
    try{
        const users = await userdb.getUsers()
        res.json(users)
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg:"Error getting student data"})
    }
    
})
.post("/users", async (req,res)=>{
    try{

        const insertedId = await userdb.addUser(req.body)
        res.json({msg:`Student added! id:${insertedId}`})
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg:"Error creating student"})
    }
})

app.listen(3000,()=>{
    console.log("port listening 3000");
})


