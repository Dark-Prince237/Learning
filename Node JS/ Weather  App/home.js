const curDate=document.getElementById("date");
let weathercon=document.getElementById("weathercon");

const tempstatus="Clouds";

// Day
const getCurrentDay=()=>        
{
    
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday [1] = "Mon";
        weekday [2] = "Tue";
        weekday [3] ="Wed";
        weekday [4] = "Thu";
        weekday [5] ="Fri";
        weekday [6] = "Sat";
        let currentDate = new Date();
        let day=weekday [currentDate.getDay()];
        return day

} 

// Time 
const getCurrentTime=()=>
{

    var months=[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "nov",
        "Dec"
    ];


    var now=new Date();
    
    var month=months[now.getMonth()];
    var date=now.getDate();

    let hours=now.getHours();
    let mins=now.getMinutes();
    let periods="AM"

    if (hours>11)
    {
        periods="PM";

        if(hours>12){hours-=12;};//13 PM not 13-12 =1

        if(mins<10)
        {
            mins="0"+mins;
        }

        


    } 
    
    return ` ${month} ${date} | ${hours}:${mins}${periods}`
    
}


curDate.innerHTML=getCurrentDay()+" |"+ getCurrentTime()

