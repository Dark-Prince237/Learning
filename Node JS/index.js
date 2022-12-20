const EventEmitter=require("events");

const event=new EventEmitter();

event.on("sayhello",()=>
{
console.log("hello bole ga");
})


event.emit("sayhello")
