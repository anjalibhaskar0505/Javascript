var firstname =document.getElementById("fname");
var lastname =document.getElementById("lname");

var place =document.getElementById("place");
var phonenumber =document.getElementById("phone");

//var qualification =document.getElementsByClassName("qual").value;
var qualification = document.querySelector( 'input[name="qual"]:checked');
var genderss = document.querySelector( 'input[name="gender"]:checked');   
var address =document.getElementById("address");
//var genderss =document.getElementsByClassName("gender").value;

var email =document.getElementById("email");
var username =document.getElementById("username");
var password =document.getElementById("password");
var confirmpassword =document.getElementById("cpassword");

var regName =/\d+$/g;
var regAddress =/^[a-zA-Z0-9]+$/;
var regPlace =/\d+$/g;
var regEmail =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
var regPhone =/^\d{10}$/;
var regPwd =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var regUsername =/^[a-zA-Z0-9]+$/;

function validate()
{

// for firstname
    
if(firstname.value =="")
{
    
    document.getElementById('fnames').innerHTML= "Field should not be empty";
    return false;
    
    
    
}
else if(regName.test(firstname.value))
{
    document.getElementById("fnames").innerHTML= "Please enter first name properly";
    return false;
    
}
else
{
    document.getElementById('fnames').innerHTML = ""
    
}

// end of firstname


// for lastname

if(lastname.value =="")
{
    document.getElementById("lnames").innerHTML= "Field should not be empty";
    return false;
    
    
}
else if(regName.test(lastname.value))
{
   document.getElementById("lnames").innerHTML= "Please enter last name properly";
   return false;
   
   
}
else
{
    document.getElementById('lnames').innerHTML = ""
}

// end of lastname

// for place

if(place.value =="")
{
    document.getElementById("places").innerHTML= "Field should not be empty";
    return false;
    
}
else if(regPlace.test(place.value))
{
   document.getElementById("places").innerHTML= "Please enter correct place";
   return false;
 
}
else
{
    document.getElementById('places').innerHTML = ""
}

// end of place

// for phonenumber

if(phonenumber.value =="")
{
    document.getElementById("phones").innerHTML= "Field should not be empty";
    return false;
    
}
else if(!regPhone.test(phonenumber.value))
{
   document.getElementById("phones").innerHTML= "Please enter phone number in correct format";
   return false;
   
}
else
{
    document.getElementById('phones').innerHTML = ""
}

// end of phonenumber


// for address

if(address.value =="")
{
    document.getElementById("add").innerHTML= "Field should not be empty";
    return false;
    
}
else
{
    document.getElementById('add').innerHTML = ""
    
}

//end of address


// for username

if(username.value =="")
{
    document.getElementById("user").innerHTML= "Field should not be empty";
    return false;
    
}
else if(!regUsername.test(username.value))
{
   document.getElementById("user").innerHTML= "Please enter username in correct format";
   return false;
   
}
else
{
    document.getElementById('user').innerHTML = ""
}

//end of username


// for email

if(email.value =="")
{
    document.getElementById("emails").innerHTML= "Field should not be empty";
    return false;
    
}
else if(!regEmail.test(email.value))
{
   document.getElementById("emails").innerHTML= "Please enter email in correct format";
   return false;
   
}
else
{
    document.getElementById('emails').innerHTML = ""
}

//end of username


// for password

if(password.value =="")
{
    document.getElementById("pwd").innerHTML= "Field should not be empty";
    return false;
    
}
else if(!regPwd.test(password.value))
{
   document.getElementById("pwd").innerHTML= "Please enter correct password";
   return false;
   
}
else
{
    document.getElementById('pwd').innerHTML = ""
}

//end of password


// for confirm password

if(confirmpassword.value =="")
{
    document.getElementById("cpwd").innerHTML= "Field should not be empty";
    return false;
    
}
else if(confirmpassword.value !=password.value)
{
   document.getElementById("cpwd").innerHTML= "Please confirm password correctly ";
   return false;
   
}
else
{
    document.getElementById('cpwd').innerHTML = ""
}

//end of username

// for qualification

// if( ( document.form.qualificatio[0].checked == false )
//   &&( document.form.qualification[1].checked == false ) &&( document.form.qualification[2].checked == false ))
  
//   {
//       document.getElementById('quals').innerHTML="choose qualification"
//       return false;
//   }
//   else
//   {
//     document.getElementById('quals').innerHTML=""
// }
  
// end of qualification

// for gender

// if ( ( document.form.genderss[0].checked == false )
//   && ( document.form.genderss[1].checked == false ) && ( document.form.genderss[2].checked == false ))
//   {
//       document.getElementById('genders').innerHTML="click gender"
//       return false;
//   }
//   else
//   {
//     document.getElementById('genders').innerHTML=""
// }
// if(genderss != null) 
// {   
//     document.getElementById("genders").innerHTML=" ";
// }
// else
// {
//     document.getElementById("genders").innerHTML="Click gender"
// }


// if(qualification != null) 
// {   
//     document.getElementById("quals").innerHTML=" ";
// }
// else
// {
//     document.getElementById("quals").innerHTML="Choose qualification"
// }


}
