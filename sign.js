function Form() 
 {
    var abc=document.getElementById("pass").value;
    var bcd=document.getElementById("pasr").value;
    var password = document.getElementById("pass").value;
      var hasNumber = /\d/.test(password);
      var hasSpecialChar = /[!@#$%^&*]/.test(password);
    var hasMinLength=abc.length>=8;
      if(abc!==bcd)
     {
         alert("Password must be same");
         return false;  
     }
   if (!hasNumber || !hasSpecialChar || !hasMinLength) {
        alert("Password must contain at least one number, one special character, and be at least 8 characters long.");
        return false;
    }

      
        window.open("website.html");
        
      
 }