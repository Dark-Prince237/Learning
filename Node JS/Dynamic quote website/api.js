const covid=async()=>
{
    const api="https://api.covid19api.com/summary";

    let data = await fetch(api);
    // console.log(data);
    const realdata=await data.json();
    console.log(realdata);
}

covid();