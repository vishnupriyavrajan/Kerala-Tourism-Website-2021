let perror=document.getElementById("perror");
let nerror=document.getElementById("nerror");
  let inputPassword4=document.getElementById("inputPassword4");
  let Phonenumber=document.getElementById("Phonenumber");
  
  function validate(){
    let pregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let nregexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    let e,p;
    if(pregexp.test(inputPassword4.value)){
        
        e=true;
    }else{
        perror.innerHTML="invalid";
      perror.style.color="red";
    }
    if((nregexp.test(Phonenumber.value))){
        
        p=true;
    }else{
        nerror.innerHTML="invalid";
      nerror.style.color="red";
    }
   

    
    if((e==true && p==true) ){
        return true;
    }else {
        return false;
    }

   }
   function strength(){
    var inputPassword4 =document.getElementById("inputPassword4");
    var msg =document.getElementById("msg");
    if(inputPassword4.value.trim().length<6){
        msg.innerHTML="Weak";
        msg.style.color="red";
        inputPassword4.style.outline="2px solid red";
        inputPassword4.style.outline="none";
    }
    if(inputPassword4.value.trim().length>=6){
        msg.innerHTML="Average";
        msg.style.color="orange";
        inputPassword4.style.outline="2px solid orange";
        inputPassword4.style.outline="none";
    }
    if(inputPassword4.value.trim().length>=8){
        msg.innerHTML="Good";
        msg.style.color="green";
        inputPassword4.style.outline="2px solid green";
        inputPassword4.style.outline="none";
    }
}