var email =document.getElementById("email");
var pwd =document.getElementById("password");

function validate()
{
    if(email.value==""|| pwd.value=="")
    {
        alert("fields cannot be empty");
        return false
        
        
    }
  else
    {
        alert("validation is proper");
        return true
        
    }
}