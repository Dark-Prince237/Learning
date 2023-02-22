const { default: axios } = require("axios");


let realData="";
// creating a async function 

const getNewQuotes=()=>
{
    let randNum=Math.floor(Math.random()*10);
    return randNum;
}
const getQuotes=async()=>
{
    // store the api into the constant 
    const api="https://type.fit/api/quotes";

    try
    {
        // fetch api and wait by using await
        let data= await fetch (api);
        // console.log(data);
        const realData= await data.json()
        // console.log(realData);
        console.log(realData.length);
        random=getNewQuotes();
        console.log(realData[random].text);

       
                
    }

    catch(error){};
}




getQuotes();