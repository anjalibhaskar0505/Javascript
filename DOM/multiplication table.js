function multiplication()
{
    var num =parseInt(document.getElementById("number").value);
    var range =parseInt(document.getElementById("range").value);
    var result=" ";

    for(let i=1;i<=range;i++)
    {
        result= result + "<p>" + num + "*" + i +"=" + num * i+ "</p>";
        document.getElementById("result").innerHTML=result;
        console.log(result);
    }
}