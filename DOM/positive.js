function positive()
{
    var num =parseInt(document.getElementById("number").value);

    if (num>0)
    {
        document.getElementById("result").innerHTML="The given number is positive"
    }
    else if(num==0)
    {
        document.getElementById("result").innerHTML="The given number is zero" 
    }
    else{
        document.getElementById("result").innerHTML="The given number is negative" 

    }
}