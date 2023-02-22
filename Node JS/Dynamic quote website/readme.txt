The fetch() method in JavaScript is used to request data from a server. 
The request can be of any type of API that return the data in JSON or XML. 
The fetch() method requires one parameter, the URL to request, and returns a promise.

Syntax:

fetch('url')           //api for the get request
  .then(response => response.json())
  .then(data => console.log(data));


The keyword async before a function makes the function return a promise:
await makes a function wait for a Promise.

async function myFunction() {
  return "Hello";
}

The await keyword can only be used inside an async function.

The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

//Promise
const proObj=new Promise((resolve,request)=>
{
    let rollNo=[11,22,33,44,55];
    resolve(rollNo);
 
});

proObj.then((roll)=>
{   
    console.log(roll);
})

//async
const proObj=new Promise((resolve,request)=>
{
    let rollNo=[11,22,33,44,55];
    resolve(rollNo);
 
});



const val=async()=>
{
    const real= await proObj;
    console.log(real)
}

 val();com

 //fetch


fetch("https://api.covid19api.com/summary").
then((apidata) => 
{ return  apidata.json() })
.then((actual) => {
    console.log(actual);
})
