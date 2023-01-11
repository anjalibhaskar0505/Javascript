var email =document.getElementById("email");
var pwd =document.getElementById("password");
var err=document.getElementById("email_error");
var er=document.getElementById("password_error");

function validate()
{
    

    if(email.value ="")
    {
        err.innerHTML = "email field cannot be empty";
        err.style.color = "red";
        return false;
        // console.log(x);
    }
    else if(pwd.value="")
    {
        er.innerHTML = "password field cannot be empty";
        er.style.color = "red";
        return false;
        // console.log(y);
    }
    else{
        return true;
    }
}