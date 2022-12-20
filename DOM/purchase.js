function purchase()
{
    var a=document.getElementById("purchase amount").value ;
    
    if (a>2000)
    {
        document.getElementById("discount").innerHTML="10%";
        var red_amount =(90/100)*a;
        document.getElementById("reduced").innerHTML=red_amount;
    }
    else
    {
        document.getElementById("discount").innerHTML="no discount";
        document.getElementById("reduced").innerHTML ="no reduction";
    }

   
}