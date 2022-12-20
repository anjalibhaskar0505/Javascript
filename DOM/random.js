function random()
{
    var num1 =parseInt(document.getElementById("min").value);
    var num2 =parseInt(document.getElementById("max").value);

    var result =(Math.random() *(num1 + num2-1) + num1);
    document.getElementById("result").innerHTML=result;
    console.log(result);
    
}