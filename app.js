const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.send("Hii there");
})

app.listen(8080, (req,res)=>{
    console.log("Server is listening on port 8080");
})