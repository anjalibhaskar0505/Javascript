function factors()
{
    var num =parseInt(document.getElementById("number").value);
    var result=" ";
    for(let i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            result =result + "<p>" + i +"</p>"
            document.getElementById("answer").innerHTML=result;
        }
    }
}