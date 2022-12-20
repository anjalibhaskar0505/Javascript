var textview =document.getElementById("textview");

function insert(num)
{
textview.value +=num;   

    
}

function clrscr()
{
    textview.value ="";
}

function equal()
{
    var result =eval(textview.value)
    textview.value =result;
}

function backspace()  
{  
var exp = textview.value;  
textview.value = exp.substring(0, exp.length - 1); 
}  