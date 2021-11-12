let perror=document.getElementById("perror");
let inputPassword4=document.getElementById("inputPassword4");
function validate(){
    let pregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(pregexp.test(inputPassword4.value)){
        perror.innerHTML="valid";
        perror.style.color="green";
        return true;
    }

    else{
        perror.innerHTML="invalid";
      perror.style.color="red";
       return false;

   }
}
