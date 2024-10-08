function data(){
    let salary = parseInt(window.prompt("Enter the salary"));
    if (salary<30000){
        window.alert("you should not to pay any tax");
    }
    else if(salary>=300000 && salary<750000){
        window.alert("you should not to pay any tax");+(salary*0.1)
    }
   else if(salary>=750000){
   window.alert("you should not to pay any tax");+(salary*0.2)
    }
}
data();
    
