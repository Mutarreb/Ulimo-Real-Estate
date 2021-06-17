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
      else {
          // alert("Please confirm you would like to submit the information which you filled in the form?");
          return true;

      }
    }

