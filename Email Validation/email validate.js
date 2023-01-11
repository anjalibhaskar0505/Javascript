var email =document.getElementById("email");
var error =document.getElementById("error");


function validate()
{
    var regexp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(regexp.test(email.value))
    {
        error.innerHTML ="valid";
        error.style.color ="green";
        return true;
    }
    else
    {
        error.innerHTML ="invalid";
        error.style.color ="red";
        return false;
    }
}