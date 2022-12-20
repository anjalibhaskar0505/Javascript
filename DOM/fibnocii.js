function fib()
{
    var a =parseInt(document.getElementById("limit").value);
    var n1=0;
    var n2=1;
    var nth=0;

    for(i=1;i<=a;i++)
    {
       
        // document.getElementById("result").innerHTML=n1 +"<br>"
        document.write(n1 + "<br>");
    nth=n1+n2;
    // console.log(c);
       
    n1=n2;
        
    n2=nth;
    

    }
    

}