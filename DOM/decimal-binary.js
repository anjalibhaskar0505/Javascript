function decimal()
{
    var num =parseInt(document.getElementById("number").value);
    var result=num.toString(2);
    document.getElementById("result").innerHTML=result;
}