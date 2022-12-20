function prime()
{
    var num=parseInt(document.getElementById("number").value);
    let flag =true;
    if(num==1)
    {
        document.getElementById("result").innerHTML="1 is neither prime nor composite";
    }
    else if(num>1)
    {
        for(let i=2;i<num;i++)
        {
            if(num%i==0)
            {
            flag =false;
            break;
            }
        }
        if(flag)
        {
            var c= document.getElementById("result").innerHTML="The given number is prime";
            console.log(c)
        }
        else{
            var d= document.getElementById("result").innerHTML="The given number is not prime";
            console.log(d)
        }
    }

}