function largest()
{
var a =parseInt(document.getElementById("first number").value);
var b =parseInt(document.getElementById("second number").value);
var c =parseInt(document.getElementById("third number").value);
 
if(a>=b && a>=c)
{
    document.getElementById("result").innerHTML=a;
}
else if(b>=c && b>=a)
{
    document.getElementById("result").innerHTML=b;
}
else
{
    document.getElementById("result").innerHTML=c;
}

}