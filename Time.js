//call back function 
//jab aap kisi bhi function ke andar pass karte hai to call back function kahlata hai.
//function Secondtime(){
//setTimeout (run,3000);

//function run(){
 //console.log("called")

//setTimeout(()=>{

 //console.log("second time called");
//},5000)


function kuchbhi(){
  settimeout (show,3000);

  function show(){
 let selectwebsite = document.querySelector('#website');
 selectwebsite.computedStyleMap.display ="block";

 let selectimg = document.querySelector('#img');
 selectimg.computedStyleMap.display = "none"

  }


}