function validate() {
      var name = document.getElementById("name");
      var email = document.getElementById("email");
      var mobile = document.getElementById("mobile");
      var submit = document.getElementById("submit");
      var form = document.getElementById("form");
      var patternEmail = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+.([a-zA-Z])+([a-zA-Z])+/;
      var isValidEmail = patternEmail.test(email.value);
      var patternMobile = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;
      var isValidMobile = patternMobile.test(mobile.value);
      if (name.value == "" || name.value == null) {
        alert("Please enter your name");
        return false;
      }
    if (mobile.value == "" || mobile.value == null || isValidMobile ==false) {
        alert("Please enter your mobile number in Australia");
        return false;
        
      }
    if (email.value == "" || email.value == null || isValidEmail ==false) {
        alert("Please enter your correct email address");
        return false; 
      }
      {
        if (confirm(' Are you sure ou want to submit your current information name: ' + name.value + ' mobile: ' + mobile.value + ' email address: '+ email.value +' click OK to submit.'))
          return true;
      }
         {
          return false;

        }

      }
    

