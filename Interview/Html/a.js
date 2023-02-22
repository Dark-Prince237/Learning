// const btn1=document.getElementById("btn1");

// const p=document.getElementById("demo")
// btn1.addEventListener("click",()=>
// {
//     const currentFontSize=parseInt(getComputedStyle(p).fontSize)
//     newFontSize=currentFontSize+1
//     p.style.fontSize=newFontSize+"px"
//     p.style.cursor="pointer"
// })

function display() {
    console.log("display after 2 sec")
}

setTimeout(display,2000);

console.log("1");
console.log("2");