const express = require("express");
const uRoutes = require("./Routes/userRoutes");
const mongoose = require("mongoose");
require("dotenv").config();




mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log("connected")
}).catch(err=>{
    console.log(err)
})
const app = express()
app.use(express.json())

app.use("/user", uRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${process.env.PORT}`);
})


app.get("/signup", (req,res)=>{
    res.send("User Signup")
})

app.get("/login", (req,res)=>{
    res.send("User login")
})

//defining end points through routes
app.get("/user", (req,res) => {
    res.send("User Route")
})

app.get("/", (req,res) => {
    res.send("Base Route")
})


