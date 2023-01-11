var email =document.getElementById("email");
var pwd =document.getElementById("password");

function validate()
{
    if(email.value.trim() =="" || pwd.value.trim() =="")
    {
        alert("fields cannot be empty")
        return false;
    }
    else
    {
        alert("validate")
        return true;
    }
}