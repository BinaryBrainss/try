const express = require("express");
const app  = express();

app.use((req,res,next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.time);
    next();
})
app.get("/",(req,res)=>{
    res.send("Hello");
});

app.get("/random",(req,res)=>{
    res.send("This is a random page");
})




app.listen(3000,()=>{
    console.log("Server Started")
})