const express=require("express");
const router=express.Router();

router.get("/:id/:name",(req,res)=>
{
    res.send(`home is running at url ${req.params.id} and name is ${req.params.name}`);
})

router.get("/about",(req,res)=>
{
    console.log("about");
})

router.get("*",(req,res)=>
{
    res.send("invalid")
})

module.exports=router;

