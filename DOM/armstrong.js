function armstrong()
{
    var a= parseInt(document.getElementById("num").value);
    var temp =a;
    var sum=0, r=0;

    while(temp>0)
    {
        r =temp%10;
        sum +=r**3;
        temp =Math.floor(temp/10);
    }
    if(sum==a)
    {
       var b= document.getElementById("result").innerHTML="Armstrong Number";
       console.log(b)
    }
   else
   {
     var c= document.getElementById("result").innerHTML="Not Armstrong Number";
     console.log(c)
   }

}