
  function myFunction() {
    
    var y = document.getElementById("open");
    if(y.style.width === "100%"){
      y.style.width = "0%";
    } else{
      y.style.width = "100%";
      
    }
  }
  function myChange(x){
    x.classList.toggle("change");
  }
  /*FORM VALIDATE*/
function myForm() {

    //Username
    u=dk.user.value;
    us= /^\w+$/;
   if(!us.test(u)){
    document.getElementById("us").style.border = " 2px solid red";
    document.getElementById("demo").style.color = " red";
      text1 = "Name field is required";  
      document.getElementById("demo").innerHTML = text1;
      return false;
      
   }
  
   else {
    text1 = "";
    document.getElementById("us").style.border = " 2px solid green";
    document.getElementById("demo").innerHTML = text1;
  
    
}


  //mail
  e=dk.mail.value;
  em= /^\w+[@]\w+[.]\w+([.]\w)?$/;
   if(!em.test(e)){
    document.getElementById("eml").style.border = " 2px solid red";
    document.getElementById("mode").style.color = " red";
       text = "Email address is invalid";  
       document.getElementById("mode").innerHTML = text;
       return false;
      
    }
    
   else {
    document.getElementById("eml").style.border = " 2px solid green";
    text = "";
    document.getElementById("mode").innerHTML = text;
    return true;
 }


}


 