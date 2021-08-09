var Fname = 
document.forms["RegForm"]["FName"];
var Lname = 
document.forms["RegForm"]["LName"];
// var email = 
// document.forms["RegForm"]["EMail"];
var email = document.getElementById("email").value;
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
// var atpos = email.indexOf("@");
// var dotpos = email.lastIndexOf(".");
var gender = 
document.getElementById("gen")
var phone = 
document.forms["RegForm"]["Telephone"];
var numpattern = "^((\\+91-?)|0)?[0-9]{10}$"


var address = 
document.forms["RegForm"]["Address"]
// var state = document.getElementById("state");
// var city = document.getElementById("citySelect");


function GEEKFORGEEKS(value) {

        if ((Fname.value.length <5) || (Fname.value = "") ) {
            window.alert("Please enter your Fname.");
            Fname.focus();
            return false;
        }
        if ((Lname.value.length <5) || (Lname.value = "") ) {
            window.alert("Please enter your Lname.");
            Lname.focus();
            return false;
        }
        // if (gender.value == "0"){   
        //     window.alert(
        //           "Please choose gender.");
        //         gender.focus();
        //         return false;
        // }
        // if (email.value == "" || (atpos < 1 || (dotpos < atpos) + 2 || ((dotpos + 2) >= email.length))){   
        //     window.alert(
        //           "Please enter a valid e-mail address.");
        //         email.focus();
        //         return false;
        // }
        if(email.value =""){
            window.alert(
                          "Please enter e-mail address.");
                        email.focus();
                        return false;
        }
        else if ( (!filter.test(email))){   
                window.alert(
                      "Please enter a valid e-mail address.");
                    email.focus();
                    return false;
        }

        // if (phone.value == ""|| phone.value.length <10  ) {
        //     window.alert(
        //       "Please enter your telephone number.");
        //     phone.focus();
        //     return false;
        // }
           
        
        // if (address.value == "") {
        //     window.alert("Please enter your address.");
        //     address.focus();
        //     return false;
        // }
        // if (state.value == "") {
        //     window.alert("Please choose your state.");
        //     state.focus();
        //     return false;
        // }
        // if (city.value == "") {
        //     window.alert("Please choose your city.");
        //     city.focus();
        //     return false;
        // }
    
        // if ( atpos < 1 || ( dotpos - atpos < 2 ))  {
        //     // if (email.value == ""){   
        // window.alert(
        //       "Please enter a valid e-mail address.");
        //     email.focus();
        //     return false;
        // }
        
    }  
       
    




