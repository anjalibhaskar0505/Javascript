function bmi()
{
    var h=parseInt(document.getElementById("height").value);
    var w=parseInt(document.getElementById("weight").value);
    
    var bmi =w/(h**2);
    var result=bmi * 10000;
   
    document.getElementById("result").innerHTML=result;
    

    if(result<18)
    {
       document.getElementById("health").innerHTML="under weight";
       
    }
    else if(result>=18 && result<=25)
    {
       document.getElementById("health").innerHTML="normal";
        
    }
    else
    {
        document.getElementById("health").innerHTML="over  weight"; 
        
    }

}