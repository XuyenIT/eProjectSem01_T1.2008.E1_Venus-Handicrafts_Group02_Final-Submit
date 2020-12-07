function kiemtra(){
  //first name
    sName= reg.firstname.value;
    reName = /^\w+$/;
    if(!reName.test(sName)){
        alert("Name can not be blanked")
        reg.firstname.focus();
        return false;
    }
  //Email
  sEmail = reg.email.value;
  reEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!reEmail.test(sEmail)){
      alert("Email is not right");
      reg.email.focus();
      return false;
  }
  //Address
  sAddress = reg.address.value;
  reAddress= /^\w/;
  if(!reAddress.test(sAddress)){
      alert("Address not exit");
      reg.address.focus();
      return false;
  }
  //City
  sCity= reg.city.value;
  reCity = /^\w/;
  if(!reCity.test(sCity)){
     alert("City can not be blanked")
     reg.city.focus();
     return false;
 }
  //State
  sState= reg.state.value;
  reState = /^\w+$/;
  if(!reState.test(sState)){
     alert("State can not be blanked")
     reg.state.focus();
     return false;
 }
  //Zip
  sZip = reg.zip.value;
  reZip= /^[0-9]/;
  if(!reZip.test(sZip)){
      alert("Zip must be numerric");
      reg.zip.focus();
      return false;
  }
   //Card name
   sCardName= reg.cardname.value;
   reCardName = /^\w+$/;
   if(!reCardName.test(sCardName)){
       alert("Cardname must be right")
       reg.cardname.focus();
       return false;
   }
   //Card number
  sCardNumber = reg.cardnumber.value;
  reCardNumber= /^[0-9]{12,15}/;
  if(!reCardNumber.test(sCardNumber)){
      alert("Cardnumber must be twelve to fifteen numbers");
      reg.cardnumber.focus();
      return false;
  }
   //Exp Month
   sExpMonth = reg.expmonth.value;
   reExpMonth = /^\w/;
   if(!reExpMonth.test(sExpMonth)){
       alert("Expmonth can not be blanked")
       reg.expmonth.focus();
       return false;
   }
    //Exp Year
  sExpYear = reg.expyear.value;
  reExpYear= /^[0-9]/;
  if(!reExpYear.test(sExpYear)){
      alert("Your Expyear must be in valid");
      reg.expyear.focus();
      return false;
  }
 
  //CVV
  sCVV = reg.cvv.value;
  reCVV= /^[0-9]/;
  if(!reCVV.test(sCVV) && sCVV.length!=3 ){
      alert("CVV is three numbers behind your card");
      reg.cvv.focus();
      return false;
  }
}
