<script src="learn.js" ></script>

// display method output
alert("hello"); //window.alert("hello");

document.write("my name is dj"); //you cannot use defer

console.log("my name is dj");


let p=document.getElementById("ptag").innerHTML="boom";

// statements

var x=5
let y=7

document.write(x+y);

// const let

// js not take extra spaces
a="rashid      iqbal"
document.write(a);

a="rashid"
b=3
document.write(a*b);//Nan


let firstName ="dhanjyoti"//camelcase


// comment
/*comment mutiple line */

//let vs var 

// Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared.

var a=2 ;
// == comparisiobn operator- double equal to return boolean (true/false)
var b=23;


document.write(a==b)
// -------------------------
let password="dhanjoyti237";

let login="dhanjoyti23"

if(password==login)
{
    console.log("login successful")
}

else

{
    console.log("login failed");
}

// --------------------------

let a=2
let b="2"
console.log(a==b)//doesnot see type
console.log(a===b) //see type

// -------------------------------
let name;
console.log(name);//undefined

// ----------------------------------

let //es6

// let cannot be redeclared.

// let name="rashid";
// let name=7;
// console.log(name); //error


// {
//     block
// // }
// Variables declared  with the let inside a { } block cannot be accessed from outside the block:
// Variables declared with the var keyword can NOT have block scope.

// {
//     let x=5;
// }

// console.log(x); //error x is not defined

// Hoisting

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current ..

var name2;
var a;
name="dhanjyoti";
a=b

console.log(name2);
// --------------------------------
var a=2 
var b=3

if (a==4 && b==3) //and 
{
    console.log("right");
}

// 
// 0 0- 0
// 0 1- 0
// 1 0- 0
// 1 1- 1

var a=2 
var b=3

if (a==4 || b==3) //or
{
    console.log("right");
}

// 
// 0 0- 0
// 0 1- 1
// 1 0- 1
// 1 1- 1
// ----------------------

var a=2 
var b=3

if (a==4 ^ b==3) //xor
{
    console.log("right");
}

// same -0 different-1
// 0 0- 0
// 0 1- 1
// 1 0- 1
// 1 1- 0
// ----------------------


let x=2
x+=2; //x=x+2
console.log(x);

let x=3
x**=2; //x=x**2
console.log(x);

// data type
// 1. String
// 2. Number

// 4. Boolean 
// 5. Undefined
// 5. Null
// 7. Symbol
// 8. Object

// ------------------
// js is dynamic
// same variable can be used to hold different data types
var a;
a=3
a="rashid"
console.log(a);

// Array - collection of datatype
var car =["BMW","AUDI","FERRARI"];
//index 0       1      2
console.log(car[2]);

//Object - key-value pair

var car=
{
    // key:value
    name:"Audi",
    type:"costly car",
    cost:"50000$",
}

console.log(car.name)

// Array of object 
var car=
[
    {
        // key:value
        name:"Audi",
        type:"costly car",
        cost:"50000$",
    },

    {
        name:"BMW",
        type:"cheaper car",
        cost:"80000$"
    }
    
]



console.log(car[1].name)
// -------------------
var a="rashid"
var b="rashid's cake"

// ------------------------

// typeof
let a=true
console.log(typeof(a))


let a=""
console.log(typeof(a)) //string

// -------------------------------
//function 

// rashid is a good boy
// dj is a good boy
// piyush is a good boy

function boy(name,gender)//function boy  defined //parameter
{
  console.log(name+" is a good "+gender);

}

boy("rashid","boy"); //function call //argument
boy("reshma","girl");
boy("piyush","boy");

function sum(a,b)
{
    console.log(a+b);
}

sum(22,33);
sum(44,66);

// -----------------------
// return type
function sum(a,b)
{
    return a+b;//return 33
    console.log("dj")
}

d=sum(11,22);//d=33

console.log(d);

// -----------------------
let a=3;//global scope
function fun()
{
 let a=2; //local scope life till functions end 

}

fun();
console.log(a);

// local scope>global scope
// ------------------------------

//object
// Ex-object Car
// properties - speed,cost,color,design,brake,gear
// values - 100,$23000 ,red,aero,2,4 
// method/function - increaseSpeed(); decreaseSpeed(); changeGear(); 

const person=
{
    "first name":"dhanjyoti",
    age:27,
   
    color:"dark",

}


console.log(person.age); //object.property_name
console.log(person["age"])

console.log(person["first name"]);

// -----------------------------

// method and this 
var person2=
{
    fname:"dj",
    lname:"rabha",

    age:17,

    fullname:function()
    {
        // return person2.fname+" "+person2.lname;
        // this refers to the "owner" of the function.
        return this.fname+" "+this.lname;
    }
}

console.log(person.fullname());

// -----------------------------------
// create variable as an object
// var x=new String();
// var x=new Boolean();
var x=new Number();

// ------------------------
// adding new property and values to an object

var x=
{
 name:"dj"
};

x.color="red";

console.log(x.color)
// -------------------------------

function table3(a)
{
    return 3*a;

}

console.log(table3(1));
console.log(table3(2));

console.log(table3(3));
console.log(table3(4));
console.log(table3(5));
console.log(table3(6));console.log(table3(7));
console.log(table3(8));
console.log(table3(9));console.log(table3(10));
// --------------------------------------------------
// event 
// click me event
<body>
    <p id="ptag">This is it</p>
    <button onclick="document.getElementById('ptag').innerHTML='great work'">Click me </button>
   
</body>

{/* <p id="ptag">This is it</p>
    <button onmouseover="document.getElementById('ptag').innerHTML='great work'">Click me </button */}
// ---------------------------------------------

str1="dhanjyoti is a good\"s boy";//escape character
console.log(str1.length);//length
console.log(str1);
console.log(str1.slice(0,9));//slice

console.log(str1.replace("good","bad"))//replace

str2="Md Rashid Iqbal";//split
str3=str2.split(" ");
console.log(str3[0]);

str4="5/1/2023";
// console.log(str4.split("/"));
str5=str4.split("/");
console.log(str5);

// -------------------------------------

// Array
const a=["rashid","piyush","dj",123];//array
console.log(a[2
]);

const b=new Array("rashid","piyush","dj",123)//array object

console.log(a[2]);


console.log(a[a.length-1]); //4-1=3