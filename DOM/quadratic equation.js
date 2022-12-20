function quad()
{
    var a=parseInt(document.getElementById("a").value);
    var b=parseInt(document.getElementById("b").value);
    var c=parseInt(document.getElementById("c").value);
    

    let discrimnant =((b*b)-(4*a*c));
    let root1 =(-b+ Math.sqrt(discrimnant))/2*a;
    let root2 =(-b- Math.sqrt(discrimnant))/2*a;

    if (discrimnant>0)
    {
    document.getElementById("result").innerHTML=root1;
    document.getElementById("result1").innerHTML=root2;
    
    }
}