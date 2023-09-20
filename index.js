// var cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));

// or cowsay.think()

//express js example

// const express = require('nodemon')

const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//for global middle ware

app.use((req,res,next)=>{
    req.msg="middleware called"
    next()
})

app.get("/",(req,res,next)=>{
    res.send(`${req.msg},hello world`)
})

app.get("/about",(req,res,next)=>{
    res.send(`about us ${req.msg} ,about`)
})

//specific middleware

const contactMiddleware=(req,res,next)=>{
    console.log("contact middleware called")
    next()
}

app.get("/contact",contactMiddleware,(req,res,next)=>{
    res.send("contact handler "+req.msg)
})

app.post("/contact",(req,res,next)=>{
    console.log(req.body)
    //res.send("contact handler "+req.msg)
    res.json({msg:`hi mr. ${req.body.name}`})
    //res.json({msg:`hello ${req.body.name}`})

})
