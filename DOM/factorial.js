function fact()
{
    var num =parseInt(document.getElementById("number").value);
    
    if (num<0)
    {
        document.getElementById("result").innerHTML="No factorial for negative numbers";
    }
    else if(num==0)
    {
        document.getElementById("result").innerHTML="Factorial is 1";
    }
    else
    {
        let fact=1;
        for(let i=1;i<=num;i++)
        fact *=i;
        document.getElementById("result").innerHTML=fact;
    }
}