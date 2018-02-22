
  function validateEmail(form1){      
       var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
       return emailPattern.test(form1); 
   }
   function chkform(form1)
   {
	   	if(document.form1.name.value==""||document.form1.name.value=="Name:")
		{
			alert("Please Enter your name");
			document.form1.name.focus();
			return false;
		}
		
		if(document.form1.email.value==""||document.form1.email.value=="Email:")
		{
			alert("Please Enter your email");
			document.form1.email.focus();
			return false;
		}
		if(!validateEmail(document.form1.email.value))
		{
			alert("Please enter correct email address");
			document.form1.email.focus();
			return false;
		}
		
		
		
    return true;
   }
