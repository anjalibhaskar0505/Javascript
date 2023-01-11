let date =new Date();
let day=date.getDay(); 
let quotes;
let days;

switch(day)
{
    case 0:
        days="Sunday";
        quotes=" Christians celebrate Christ's resurrection";
        break;

    case 1:
        days="Monday";
        quotes=" first day of the work week";
        break;

    case 2:
        days="Tuesday";
        quotes=" Fall of Constantinople occurred";
        break;

    case 3:
        days="Wednesday";
        quotes="Hump day";
        break;

    case 4:
        days="Thursday";
        quotes="Thor's day";
        break;

    case 5:
        days="Friday";
        quotes="commemorates the crucifixion of Jesus";
        break;

    case 6:
        days="Saturday";
        quotes="Day of Saturn";
        break;

}

document.getElementById("getday").innerHTML=days;
document.getElementById("quotes").innerHTML=quotes;