/* how to import global npm module


nodemon
-automatcially restarting the node application

nodemon index.js

---------------------------------------------

module wrapper

-immediately invoked function

(function (exports, require, module, _filename, dirname) {
    const a = require("fs");
    const name = "vinod";
    console.log(name);
    module.exports {dkfjdkssdkl}
});

console.log(name) //error - name is not defined

-----------------------------------------------
Creating Your own server HTTP

To access web pages of any web application, you need a web server. The
web server will handle all the http requests for the web application
e.g IIS is a web server for ASP.NET web applications and Apache is a web
server for PHP or Java web applications.
Node.js provides capabilities to create your own web server which will handle HTTP
requests asynchronously. You can use IIS or Apache to run Node.js web application
but it is recommended to use Node.js web server.

- handle Http requesr asynchronously.

// The http.createServer() method includes request and response parameters which is supplied by node.js.
// The request object can be used to get information about the current HTTP request
// e.g., url, request header, and data.
// The response object can be used to send a response for a current HTTP request.
// If the response from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type:

const http=require("http");

const server=http.createServer((request,response)=>{

  response.end("server get a data");

});

server.listen(3000,()=>
{
  console.log("server started and listening to port 3000")
})

browser- localhost:3000 
----------------------------------------------------------------
Http Routing||handled Http request

Routing defines the way in which the client requests are handled by the application endpoints.

const http = require("http");

const server = http.createServer((request, response) => {

  console.log(request.url);
  if (request.url == "/contact")
    response.end("server is on contact page");

  else if (request.url == "/about") {
    response.write("server is on about page");
    response.end();
  }

  else {
    response.writeHead(404,{"content-type":"text/html "});
    response.write("<h1>404 Error Page. Page Doesnot Exit</h1>");
    response.end();
  }

});

--------------------------------------------------------------------

JSON

JSON stands for JavaScript Object Notation. JSON is a lightweight,

format for storing and transporting data.

JSON is often used when data is sent from a server to a web page.

const biodata =
{
  name:"piyush",
  age:"26"
}

console.log(biodata.age)

// convert the object to json
const jsonData=JSON.stringify(biodata);
console.log(jsonData);

// convert the json to object

const objData=JSON.parse(jsonData)
console.log(objData)

//simple exercise

const biodata =
{
  name:"piyush",
  age:"26",
  company:"infosys"
};


const json =JSON.stringify(biodata);
const fs=require("fs");
// fs.writeFile("server.json",json,(err)=>{})
fs.readFile("server.json","utf-8",(err,data)=>{
  console.log(data);
  const objData=JSON.parse(json);
console.log(objData );


})
-----------------------------------------

A simple API

API is a like a service which allows us to request a data.


else if (request.url="/userapi")
  {
    const fs=require("fs");
    fs.readFile("api.json","utf-8",(err,data)=>{
     

    const objFile=JSON.parse(data);
    // console.log(objFile.price);
   
    
    response.write(objFile.name);
    response.end();
    })
  }

  But there is one little problem in this code ----------

  we read the file everytime due to

  const fs=require("fs");
    fs.readFile("api.json","utf-8",(err,data)=>{
     

    const objFile=JSON.parse(data);
    // console.log(objFile.price);
   
    
    response.write(objFile.name);
    response.end();
    })

    so solution is write it outside ----------------

 const http = require("http");

const server = http.createServer((request, response) => {

  const fs=require("fs");
  const data=fs.readFileSync("api.json","utf-8");
  const objFile=JSON.parse(data);
    

   
  

  console.log(request.url);
  if (request.url == "/contact")
    response.end("server is on contact page");

  else if (request.url == "/about") {
    response.write("server is on about page");
    response.end();
  }

  else if (request.url="/userapi")
  {
    response.writeHead(200,{"content-type":"application/json"});//to tell server this is json
    response.write(objFile.name);
    response.end();
  }
   

  else {
    // response.writeHead(404,{"content-type":"text/html "});
    response.write("<h1>404 Error Page. Page Doesnot Exit</h1>");
    response.end();
  }

});

server.listen(3000,()=>
{
  console.log("server started and listening to port 3000")
})


----------------------------------------------------------------------------------------------
Event Module

// Node.js has a built-in module, called "Events",
// where you can create-, fire-, and listen for- your own events.
// Example 1- Registering for the event to be fired only one time using once.
// Example 2 - Create an event emitter instance and register a couple of callbacks
// Example 3- Registering for the event with callback parameters

The concept is quite simple: emitter objects emit named events that cause
previously registered listeners to be called. So, an emitter object
basically has two main features:
Emitting name events.
Registering and unregistering listener functions.


const EventEmitter =require("events");
const event =new EventEmitter();

event.on("sayHello",()=>
{
  console.log("hello jii");
})

event.emit("sayHello");

----

const EventEmitter =require("events");
const event =new EventEmitter();

event.on("sayHello",()=>
{
  console.log("hello jii");
})
event.on("sayHello",()=>
{
  console.log("Bye jii");
})
event.on("sayHello",()=>
{
  console.log("haa jii");
})


event.emit("sayHello");

----


const EventEmitter =require("events");
const event =new EventEmitter();



event.on("checkpage",(sc,msg)=>
{
  console.log(`status code is ${sc} and message is ${msg}`)
})
event.emit("checkpage",200,"ok");

--------------------------------------------------------------
Streams and Buffer

Streams are objects that let you read data from a source or write data to a
destination in continuous fashion. In Node.js, there are four types of streams -
Streaming means listening to music or watching video in 'real time', instead of
downloading a file to your computer and watching it later
Readable - Stream which is used for read operation.
Writable - Stream which is used for write operation.
Duplex - Stream which can be used for both read and write operation.
Transform A type of duplex stream where the output is computed based on input.

Each type of Stream is an EventEmitter instance and throws several events at
different instance of times. For example, some of the commonly used events are -
data - This event is fired when there is data is available to read.
end - This event is fired when there is no more data to read.
error - This event is fired when there is any error receiving or writing data.
finish - This event is fired when all the data has been flushed to underlying system

---
Reading from a Stream
Create a readable stream
Handle stream events data, end, and error

Streaming way

const fs=require("fs");
const http=require("http");

const server =http.createServer();

server.on("request",(request,response)=>
{
  
 const rstream =fs.createReadStream("input.txt");

 rstream.on("data",(chunkdata)=>{
  response.write(chunkdata);
 });

 rstream.on("end",()=>
 {
  response.end();
 });

 rstream.on("error",(err)=>
 {
  console.log(err);
  response.end("file not found");
 })

});

server.listen(8000);
--------------------------------------------------------

stream pipe

stream.pipe(), the method used to take a readable stream and connect it to a
writeable steam.

Alternate method of stream and buffer

const fs=require("fs");
const http=require("http");

const server =http.createServer();

server.on("request",(request,response)=>
{
  
 const rstream =fs.createReadStream("input.txt");

 rstream.pipe(response);
});

server.listen(8000);


*/
