
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

else if(email ===""){
    document.querySelector('#erroremail').innerHTML="please enter vaild email";
    let selectname = document.querySelector('#email');
    selectname.style.broderColor = "red";
    selectname.style.outlineColor ="red";
    return false;
}

}
 
function s(){
    let selectedinput = document.querySelector('#name');
    let selecterrorname = document.querySelector('#errorname');
    selecterrorname.innerHTML = ""
    selectedinput.style.broderColor ="black";
    selectedinput.style.outlineColor="black";
  }

//   function s(){
//     let selectname = document.querySelector('#email');
//     selectname.style.broderColor = "red";
//     selectname.style.outlineColor ="red";
//     return false;
//     }