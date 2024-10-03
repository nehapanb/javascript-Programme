else if(!(email.includes('a') && email.includes("com"))){
    document.querySelector(#erroremail).innerHtml = "please enter email";
    let selectname = document.querySelector('#email');
    selectname.style.borderColor = "red"
    selectname.style.outlineColor = "red"
    return false;
}
else if (mobile.length !==10){
    document.querySelector('#errormobile').innerHTML = "mobile number should"
}



}