function calc(a,b,o)
{   
    if( o=="+")
        return a+b;

        else if (o=="-")
            return a-b;

        else if(o=="*")
            return a*b;

        else if(o=="/")
            return a/b;
        
        else
        {
            console.log("wrong option selected");
        }
    
}


console.log(calc(22,11,"-"));
console.log(calc(22,11,"+"));
console.log(calc(22,11,"*"));
console.log(calc(22,11,"/"));
