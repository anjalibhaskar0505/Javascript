function convert()
{
    var ht= parseInt(document.getElementById("height").value);
    var result1 =ht/30.48;
    var result2 =result1 * 12;
   document.getElementById("feet").innerHTML=result1;
    
    document.getElementById("inches").innerHTML=result2;
    
}