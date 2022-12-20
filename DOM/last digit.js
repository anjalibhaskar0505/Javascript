function last()
{

    var a =parseInt(document.getElementById("num1").value);
    var b =parseInt(document.getElementById("num2").value);
    var c =parseInt(document.getElementById("num3").value);

    const result1 =a%10;
    const result2 =b%10;
    const result3 =c%10;

    if (result1==result2 && result1==result3)
    {
        document.getElementById("result").innerHTML="The numbers are having the same last digit"
    }
    else
    {
        document.getElementById("result").innerHTML="The numbers are having the different last digit"
    }
}