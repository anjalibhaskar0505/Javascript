function even(){
    var x =parseInt(document.getElementById("num").value);
    if(x%2==0)
    {
      document.getElementById("answer").innerHTML="even"; 
       
    }
    else
    {
        document.getElementById("answer").innerHTML="odd";
        
    }
}

 