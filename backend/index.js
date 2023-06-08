const express = require("express");
const uRoutes = require("./Routes/userRoutes");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');

const app = express()
app.use(express.json())

// Enable CORS for all routes
app.use(cors());
app.use("/user", uRoutes);



mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log("connected")
}).catch(err=>{
    console.log(err)
})

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


