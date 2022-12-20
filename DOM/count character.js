function count()
{
    var str =document.getElementById("string").value ;
    var result =str.length;
    var result1 =str.split(" ").length
    document.getElementById("answer").innerHTML=result;
    document.getElementById("result").innerHTML=result1;
    
}