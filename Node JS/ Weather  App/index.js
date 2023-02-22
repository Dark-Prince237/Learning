// importing  a server http
const http=require("http");
// to reading the file
const fs=require("fs");

// using a request npm package requets
var requests=require("requests");

// reading a file 

const homeFile=fs.readFileSync("home.html","utf-8");

// replaceVal  function take two parameter values:-
// homeFile in tempVal val in orgVal
const replaceVal=(tempVal,orgVal)=>
{
    // console.log(tempVal);
    // console.log("----------");
    // console.log(orgVal);

    let temperature=tempVal.replace("{%tempval%}",orgVal.main.temp); 
    temperature=temperature.replace("{%tempmin%}",orgVal.main.temp_min);
    temperature=temperature.replace("{%tempmax%}",orgVal.main.temp_max);
    temperature=temperature.replace("{%location%}",orgVal.name);
    temperature=temperature.replace("{%country%}",orgVal.sys.country);
    temperature=temperature.replace("{%tempstatus%}",orgVal.weather[0].main);
    
    return temperature;
   
}


const city="spain";


// creating a server using http

const server=http.createServer((request,response)=>
{

    // if url=/ then go on
    if(request.url=="/d")
    {

        // byy using requests package ,request the API of weather.
        requests(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7c855051f72240dd56381a4ce55055d5&units=metric`)
        
        // on data event is fired .This event is fired when there is data is available to read.
        // we get chunk as a json data

        .on('data', (chunk)=>{

            // now convert json into object
            const objData=JSON.parse(chunk);
            // convert object into array of the object                                                            // 
            const arrData=[objData];
            
            // using map function to get all values and using join to convert into string.
            // and then calling replaceVal function with argument homeFile that is our home.html
            // and val is the replacing data
            const realTimedata=arrData.map((val)=>replaceVal(homeFile,val))
            .join("");
           
            // writing the return of replaceVal to the server.
            response.write(realTimedata);
            response.end();

        })

        // for error
        .on('end',(err)=> {
          if (err) return console.log('connection closed due to errors', err);
         
          response.end()
        }); 


    }

    else if(request.url=="/")
    {
        requests(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7c855051f72240dd56381a4ce55055d5&units=metric`)

        .on('data', (chunk)=>{
            const objData=JSON.parse(chunk); 
            // console.log(objData);                                                           
            const arrData=[objData];
            // console.log(arrData);
         
            const realTimedata=arrData.map((val)=>replaceVal(homeFile,val)) .join("");
            // const realTimedata=replaceVal(homeFile,objData);
           
            response.write(realTimedata);
            response.end();

        })
        .on('end',(err)=> {
          if (err) return console.log('connection closed due to errors', err);
         
          response.end()
        }); 

    }

    else if(request.url=="/bangalore")
    {
        requests(`https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=7c855051f72240dd56381a4ce55055d5&units=metric`)

        .on('data', (chunk)=>{
            const objData=JSON.parse(chunk);                                                            
            const arrData=[objData];
         
            const realTimedata=arrData.map((val)=>replaceVal(homeFile,val))
            .join("");
           

            response.write(realTimedata);
            response.end();

        })
        .on('end',(err)=> {
          if (err) return console.log('connection closed due to errors', err);
         
          response.end()
        }); 

    }

    else if(request.url=="/amritsar")
    {
        requests(`https://api.openweathermap.org/data/2.5/weather?q=amritsar&appid=7c855051f72240dd56381a4ce55055d5&units=metric`)

        .on('data', (chunk)=>{
            const objData=JSON.parse(chunk);                                                            
            const arrData=[objData];
         
            const realTimedata=arrData.map((val)=>replaceVal(homeFile,val))
            .join("");
           

            response.write(realTimedata);
            response.end();

        })
        .on('end',(err)=> {
          if (err) return console.log('connection closed due to errors', err);
         
          response.end()
        }); 

    }
})
// listening server at port 3000
server.listen(3000);
