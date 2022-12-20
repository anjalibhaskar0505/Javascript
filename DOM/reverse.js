function reverse()
{
    var a =parseInt(document.getElementById("num").value);
    
    var sum=0,b=0;

    while(a>0)
    {
        b =a%10;
        sum =sum*10 + b;
        a =Math.floor(a/10);
    }
    document.getElementById("result").innerHTML=sum;
    
}