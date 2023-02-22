import express from "express"
import path from "path";

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.sendFile(path.resolve("index.html"));
    
    
})


app.post("/",(req,res)=>{
    console.log(req.body);
    const {name}=req.body;
    console.log(name);
    res.send(req.body);
})
app.listen(3000)