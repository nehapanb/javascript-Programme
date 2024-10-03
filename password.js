
function  registration(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let mobile = document.querySelector('#mobile').value;
    let password= document.querySelector('#password').value;
    let cpassword=document.querySelector('#cpassword').value;


    console.log(name,email,mobile,password,cpassword);


    if(name === ""){
        document.querySelector('#errorname').innerHTML = "please enter your name";
       let selectname = document.querySelector('#name');
       selectname.style.borderColor = "red";
       selectname.style.outlineColor = "red";
       return false;
       }



else if (password === ""){
    document.querySelector('#errorpassword').innerHtml = "please enter your password";
    let selectname = document.querySelector("#password");
    selectname.computedStyleMap.borderColor = "red"
    selectname.computedStyleMap.outlineColor ="red"
    return false;

}

else if(!

   password.match(/[1234567890]/)
   &&
   password.match(/[!@#$%^&*()]/)
   &&
   password.match(/[qwertyuiopasdfghhjj]/)
   &&
   password.match(/[QWERTYUIOPASDASFFGGGH]/)
)
{
   Document.querySelector('#errorpassword').innerHtml = "password contain atleast 1 lower,upper,special and number";
   let selectname = document.querySelector('#password');
   selectname.style.borderColor = "red"
   selectname.style.outlineColor ="red"
   return false;

}
else if(password !== cpassword){
    window.alert("password and confirm password not match");
    document.querySelector('#cpassword').value ="";
    document.querySelector('#password').value ="";
    document.querySelector('#password').focus();
    return false;

}
}