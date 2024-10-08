function run(){
    let password= document.querySelector('#password').value;

        console.log(password);

        if(password){
        document.querySelector('#errorpassword').innerHtml = "please enter your password";
        let selectname = document.querySelector("#password");
        selectname.computedStyleMap.borderColor = "red"
        selectname.computedStyleMap.outlineColor ="red"
        return false;
    }
        else if (password === ""){
            document.querySelector('#errorpassword').innerHtml = "please enter your password";
            let selectname = document.querySelector("#password");
            selectname.computedStyleMap.borderColor = "red";
            selectname.computedStyleMap.outlineColor ="red";
            return false;
            
        }
        
else if(

        password.match(/[1234567890]/)
        &&
        password.match(/[!@#$%^&*()]/)
        &&
        password.match(/[qwertyuiopasdfghhjj]/)
        &&
        password.match(/[QWERTYUIOPASDASFFGGGH]/)
){
    
}


}

