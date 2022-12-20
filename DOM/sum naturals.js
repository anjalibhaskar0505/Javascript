function sum()
{
    var num =parseInt(document.getElementById("number").value);
    var sum =0;
    sum =(num *(num + 1))/2;
    document.getElementById("result").innerHTML=sum;
}