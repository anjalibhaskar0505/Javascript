var username =document.getElementById("inputUserId");
var password =document.getElementById("inputPassword");
var namee =document.getElementById("inputName");
var address =document.getElementById("inputAddress");
var zip =document.getElementById("inputZip");
var email =document.getElementById("inputEmail");
var abouts =document.getElementById("about");


var regEmail =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
var regZip =/^\d{5}(-\d{4})?$/;
var format = /^[a-zA-Z0-9- ,_]*$/;


function validate()
{

    // for address
    
    if(address.value == "")
    {document.getElementById("address").innerHTML="Please enter address";
       return false;}
    
    else
    {document.getElementById("address").innerHTML=" ";}

    //end of address


    //for email

    if(email.value =="")
    {document.getElementById("emails").innerHTML="Please enter email";
        return false;}
    
    else if(!regEmail.test(email.value))
    {document.getElementById("emails").innerHTML= "Please enter email in correct format";
        return false;}
    
    else
    {document.getElementById('emails').innerHTML = ""}

    //end of email


    //for abouts

    if(abouts.value == "")
    {document.getElementById("about1").innerHTML="Field is required";
       return false;}
    
    else{document.getElementById("about1").innerHTML=" ";}

    //end of abouts

    //for name

    if (namee.value == "") {
        document.getElementById('names').innerHTML = "enter your middle name"
        return false;
      }else if(!format.test(namee.value)){
        document.getElementById('names').innerHTML="not use special character";
        return  false;
      }

    else { document.getElementById('names').innerHTML = "" }

    //end of name


    //for zip

    if(zip.value =="")
    {document.getElementById('zips').innerHTML= "Field should not be empty";
        return false;}
    
        
    else if(!regZip.test(zip.value))
    {document.getElementById("zips").innerHTML= "Zip code not in correct format";
        return false;}
    
        else
    {document.getElementById("zips").innerHTML = ""}
    // end of zip


    // for password

    if(password.value =="")
    {document.getElementById('pwd').innerHTML= "Password field is mandatory "; 
        return false;}
    
        
    else if((password.value.length <= 7) || (password.value.length >= 12))
    {document.getElementById('pwd').innerHTML= "Password should be between 7 and 12"; 
        return false;}
    
    
    else
    {document.getElementById('pwd').innerHTML=" ";}

    //end of password

    //for username

    if (username.value == "")
     {document.getElementById('uname').innerHTML = "enter userid"
        return false;}
      
      else if ((username.value.length <= 6) || (username.value.length >= 9)) {
        document.getElementById('uname').innerHTML = "maximum 9 "
        return false;}
    
      else if(!isNaN(username.value))
      {document.getElementById('uname').innerHTML ="only character are allowed"
        return false;}
      
     else if(format.test(username.value))
      {document.getElementById('uname').innerHTML="use special character";
        return false;}
      else
      {document.getElementById("uname").innerHTML="";}

    //for select
    
    
    if(document.register.countrySelect.selectedIndex=="")
    {document.getElementById("country").innerHTML ="Select the country";
        return false;}
    else
    {var sel = document.getElementById("countrySelect");
     var selectedText = sel.options[sel.selectedIndex].text;
     document.getElementById("country").innerHTML= " ";
    }
        
    //end of select


    //for radio button

    var genders=document.getElementsByName('inputGender');
     
    if (!(genders[0].checked || genders[1].checked)) 
    {document.getElementById("gender").innerHTML ="Choose gender";
        return false;}
    else{document.getElementById("gender").innerHTML =""; }

    //end of radio button

    //for checkbox

    var languages=document.getElementsByName('inputLanguage');
     
    if (!(languages[0].checked || languages[1].checked)) 
    {document.getElementById("language").innerHTML ="Choose language";
        return false;}
    else
    {document.getElementById("language").innerHTML ="";}

    //end of radio button


}

