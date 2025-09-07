const express = require("express");
const app = express();

let port = 3000;

app.listen(port,()=>{
    console.log(`Server started on port: ${port}`);
})

let code = "<h1> Fruits </h1> <ul> <li> Apple </li> <li> mango </li> </ul>";
// app.use((req,res)=>{
//     console.log("Request recived");
//     res.send(code)
// }) ;

app.get("/",(req,res)=>{
    res.send("Helllo i am root")
});

app.get("/user",(req,res)=>
{
    console.log("HEllo mr Shashwat");
    res.send("Hello mr.shashwat");
})

app.post("/",(req,res)=>{
    res.send("you sent a post req");
})

// app.use((req,res)=>{
//     res.send("Not a valid page")
// })


app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
})

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("No results"); 
})