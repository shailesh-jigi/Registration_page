function fn(){
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var mobile = document.getElementById("mob");
    var password = document.getElementById("pwd");
    var confirm_pwd = document.getElementById("con_pwd");

    //Firstname Field Start Here
    if(fname.value.trim()=="" && lname.value.trim()=="" && email.value.trim()=="" && mobile.value.trim()==""
     && password.value.trim()=="" && confirm_pwd.value.trim()=="" ) {

        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        document.getElementById("h6mob").innerHTML="This Field is Requried";
        mobile.style.border="2px solid red";
        document.getElementById("h6pwd").innerHTML="Password Field is Requried";
        password.style.border="2px solid red";
        document.getElementById("h6con_pwd").innerHTML="Confirm Password Field is Requried";
        confirm_pwd.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && lname.value.trim()=="" && email.value.trim()=="" && mobile.value.trim()==""
     && password.value.trim()=="") {

        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        document.getElementById("h6mob").innerHTML="This Field is Requried";
        mobile.style.border="2px solid red";
        document.getElementById("h6pwd").innerHTML="Password Field is Requried";
        password.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && lname.value.trim()=="" && email.value.trim()=="" && mobile.value.trim()==""
     && confirm_pwd.value.trim()=="") {

        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        document.getElementById("h6mob").innerHTML="This Field is Requried";
        mobile.style.border="2px solid red";
        document.getElementById("h6con_pwd").innerHTML="Confirm Password Field is Requried";
        confirm_pwd.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && lname.value.trim()=="" && email.value.trim()=="" 
    && mobile.value.trim()==""){

        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        document.getElementById("h6mob").innerHTML="This Field is Requried";
        mobile.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && lname.value.trim()=="" && email.value.trim()=="" 
    && password.value.trim()==""){

        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        document.getElementById("h6pwd").innerHTML="Password Field is Requried";
        password.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && lname.value.trim()=="" && email.value.trim()=="" 
    && confirm_pwd.value.trim()==""){

        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        document.getElementById("h6con_pwd").innerHTML="Confirm Password Field is Requried";
        confirm_pwd.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && lname.value.trim()=="" && email.value.trim()==""){
        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is Requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Filed is Requried";
        email.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && lname.value.trim()=="" && mobile.value.trim()==""){
        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is Requried";
        lname.style.border="2px solid red";
        document.getElementById("h6mob").innerHTML="This Filed is Requried";
        mobile.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && lname.value.trim()=="" && password.value.trim()==""){
        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is Requried";
        lname.style.border="2px solid red";
        document.getElementById("h6pwd").innerHTML="Password Filed is Requried";
        password.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && lname.value.trim()=="" && confirm_pwd.value.trim()==""){
        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is Requried";
        lname.style.border="2px solid red";
        document.getElementById("h6con_pwd").innerHTML="Confirm Password Filed is Requried";
        confirm_pwd.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && lname.value.trim()==""){
    
        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is Requried";
        lname.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && email.value.trim()==""){
    
        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && mobile.value.trim()==""){
    
        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6mob").innerHTML="This Field is Requried";
        mobile.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && password.value.trim()==""){
    
        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6pwd").innerHTML="Password Field is Requried";
        password.style.border="2px solid red";
        return false;
    }

    else if(fname.value.trim()=="" && confirm_pwd.value.trim()==""){
    
        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        document.getElementById("h6con_pwd").innerHTML="Confirm Password Field is Requried";
        confirm_pwd.style.border="2px solid red";
        return false;
    }

    //=========================================================================
       
    else if(fname.value.length<=3 && lname.value.trim()=="" && email.value.trim()=="" && mobile.value.trim()==""
     && password.value.trim()=="" && confirm_pwd.value.trim()=="" ) {

        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        document.getElementById("h6mob").innerHTML="This Field is Requried";
        mobile.style.border="2px solid red";
        document.getElementById("h6pwd").innerHTML="Password Field is Requried";
        password.style.border="2px solid red";
        document.getElementById("h6con_pwd").innerHTML="Confirm Password Field is Requried";
        confirm_pwd.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && lname.value.trim()=="" && email.value.trim()=="" && mobile.value.trim()==""
     && password.value.trim()=="") {

        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        document.getElementById("h6mob").innerHTML="This Field is Requried";
        mobile.style.border="2px solid red";
        document.getElementById("h6pwd").innerHTML="Password Field is Requried";
        password.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && lname.value.trim()=="" && email.value.trim()=="" && mobile.value.trim()==""
     && confirm_pwd.value.trim()=="") {

        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        document.getElementById("h6mob").innerHTML="This Field is Requried";
        mobile.style.border="2px solid red";
        document.getElementById("h6con_pwd").innerHTML="Confirm Password Field is Requried";
        confirm_pwd.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && lname.value.trim()=="" && email.value.trim()=="" 
    && mobile.value.trim()==""){

        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        document.getElementById("h6mob").innerHTML="This Field is Requried";
        mobile.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && lname.value.trim()=="" && email.value.trim()=="" 
    && password.value.trim()==""){

        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        document.getElementById("h6pwd").innerHTML="Password Field is Requried";
        password.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && lname.value.trim()=="" && email.value.trim()=="" 
    && confirm_pwd.value.trim()==""){

        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        document.getElementById("h6con_pwd").innerHTML="Confirm Password Field is Requried";
        confirm_pwd.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && lname.value.trim()=="" && email.value.trim()==""){
        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is Requried";
        lname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Filed is Requried";
        email.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && lname.value.trim()=="" && mobile.value.trim()==""){
        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is Requried";
        lname.style.border="2px solid red";
        document.getElementById("h6mob").innerHTML="This Filed is Requried";
        mobile.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && lname.value.trim()=="" && password.value.trim()==""){
        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is Requried";
        lname.style.border="2px solid red";
        document.getElementById("h6pwd").innerHTML="Password Filed is Requried";
        password.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && lname.value.trim()=="" && confirm_pwd.value.trim()==""){
        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is Requried";
        lname.style.border="2px solid red";
        document.getElementById("h6con_pwd").innerHTML="Confirm Password Filed is Requried";
        confirm_pwd.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && lname.value.trim()==""){
    
        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6lname").innerHTML="Lastname is Requried";
        lname.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && email.value.trim()==""){
    
        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6email").innerHTML="Email Field is Requried";
        email.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && mobile.value.trim()==""){
    
        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6mob").innerHTML="This Field is Requried";
        mobile.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && password.value.trim()==""){
    
        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6pwd").innerHTML="Password Field is Requried";
        password.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3 && confirm_pwd.value.trim()==""){
    
        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        document.getElementById("h6con_pwd").innerHTML="Confirm Password Field is Requried";
        confirm_pwd.style.border="2px solid red";
        return false;
    }

    //=========================================================================

    //=========================================================================
    
    else if(fname.value.length>20 && lname.value.trim()=="" && email.value.trim()=="" && mobile.value.trim()==""
    && password.value.trim()=="" && confirm_pwd.value.trim()=="" ) {

       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6lname").innerHTML="Lastname is requried";
       lname.style.border="2px solid red";
       document.getElementById("h6email").innerHTML="Email Field is Requried";
       email.style.border="2px solid red";
       document.getElementById("h6mob").innerHTML="This Field is Requried";
       mobile.style.border="2px solid red";
       document.getElementById("h6pwd").innerHTML="Password Field is Requried";
       password.style.border="2px solid red";
       document.getElementById("h6con_pwd").innerHTML="Confirm Password Field is Requried";
       confirm_pwd.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && lname.value.trim()=="" && email.value.trim()=="" && mobile.value.trim()==""
    && password.value.trim()=="") {

       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6lname").innerHTML="Lastname is requried";
       lname.style.border="2px solid red";
       document.getElementById("h6email").innerHTML="Email Field is Requried";
       email.style.border="2px solid red";
       document.getElementById("h6mob").innerHTML="This Field is Requried";
       mobile.style.border="2px solid red";
       document.getElementById("h6pwd").innerHTML="Password Field is Requried";
       password.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && lname.value.trim()=="" && email.value.trim()=="" && mobile.value.trim()==""
    && confirm_pwd.value.trim()=="") {

       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6lname").innerHTML="Lastname is requried";
       lname.style.border="2px solid red";
       document.getElementById("h6email").innerHTML="Email Field is Requried";
       email.style.border="2px solid red";
       document.getElementById("h6mob").innerHTML="This Field is Requried";
       mobile.style.border="2px solid red";
       document.getElementById("h6con_pwd").innerHTML="Confirm Password Field is Requried";
       confirm_pwd.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && lname.value.trim()=="" && email.value.trim()=="" 
   && mobile.value.trim()==""){

       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6lname").innerHTML="Lastname is requried";
       lname.style.border="2px solid red";
       document.getElementById("h6email").innerHTML="Email Field is Requried";
       email.style.border="2px solid red";
       document.getElementById("h6mob").innerHTML="This Field is Requried";
       mobile.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && lname.value.trim()=="" && email.value.trim()=="" 
   && password.value.trim()==""){

       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6lname").innerHTML="Lastname is requried";
       lname.style.border="2px solid red";
       document.getElementById("h6email").innerHTML="Email Field is Requried";
       email.style.border="2px solid red";
       document.getElementById("h6pwd").innerHTML="Password Field is Requried";
       password.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && lname.value.trim()=="" && email.value.trim()=="" 
   && confirm_pwd.value.trim()==""){

       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6lname").innerHTML="Lastname is requried";
       lname.style.border="2px solid red";
       document.getElementById("h6email").innerHTML="Email Field is Requried";
       email.style.border="2px solid red";
       document.getElementById("h6con_pwd").innerHTML="Confirm Password Field is Requried";
       confirm_pwd.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && lname.value.trim()=="" && email.value.trim()==""){
       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6lname").innerHTML="Lastname is Requried";
       lname.style.border="2px solid red";
       document.getElementById("h6email").innerHTML="Email Filed is Requried";
       email.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && lname.value.trim()=="" && mobile.value.trim()==""){
       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6lname").innerHTML="Lastname is Requried";
       lname.style.border="2px solid red";
       document.getElementById("h6mob").innerHTML="This Filed is Requried";
       mobile.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && lname.value.trim()=="" && password.value.trim()==""){
       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6lname").innerHTML="Lastname is Requried";
       lname.style.border="2px solid red";
       document.getElementById("h6pwd").innerHTML="Password Filed is Requried";
       password.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && lname.value.trim()=="" && confirm_pwd.value.trim()==""){
       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6lname").innerHTML="Lastname is Requried";
       lname.style.border="2px solid red";
       document.getElementById("h6con_pwd").innerHTML="Confirm Password Filed is Requried";
       confirm_pwd.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && lname.value.trim()==""){
   
       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6lname").innerHTML="Lastname is Requried";
       lname.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && email.value.trim()==""){
   
       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6email").innerHTML="Email Field is Requried";
       email.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && mobile.value.trim()==""){
   
       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6mob").innerHTML="This Field is Requried";
       mobile.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && password.value.trim()==""){
   
       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6pwd").innerHTML="Password Field is Requried";
       password.style.border="2px solid red";
       return false;
   }

   else if(fname.value.length>20 && confirm_pwd.value.trim()==""){
   
       document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
       fname.style.border="2px solid red";
       document.getElementById("h6con_pwd").innerHTML="Confirm Password Field is Requried";
       confirm_pwd.style.border="2px solid red";
       return false;
   }

    //=========================================================================

    else if(fname.value.trim()==""){
    
        document.getElementById("h6fname").innerHTML="Firstname is Requried";
        fname.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length<=3){

        document.getElementById("h6fname").innerHTML="Firstname Must Be Atleast 3 Character";
        fname.style.border="2px solid red";
        return false;
    }

    else if(fname.value.length>20){

        document.getElementById("h6fname").innerHTML="Firstname Must Be Less Than 20 Character";
        fname.style.border="2px solid red";
        return false;
    }

    //FirstField Start Ends Here
    
}
