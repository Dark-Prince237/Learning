const express =require("express");
const hbs=require("hbs");

const api=express();

console.log(__dirname);
const path=require("path");
const staticPath=path.join(__dirname,"../public")
console.log(staticPath);
// api.use(express.static(staticPath));
const templatePath=path.join(__dirname,"../src/templates ");
console.log(templatePath);
const partialsPath=path.join(__dirname,"../src/templates/partials");
api.set('view engine','hbs');
api.set('views',templatePath);

hbs.registerPartials(partialsPath);


api.get("/",(req,res)=>
{
    res.render("index",{
        name:"gamer"
    });
});

api.get("/",(request,response)=>
{
    response .send({
        name:"rashid",
        age:24
    });
});

api.get("/about",(req,res)=>
{
    res.json([{
        name:"rashid",
        age:24
    }]);
});

api.get("*",(req,res)=>
{
    res.render("404",{
        errorcomment:"404 file not found",
    });
})


const port=3001;
api.listen(port,()=>console.log(`listening the server ${port}`));
