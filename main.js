let date = new Date();

let button = document.querySelector(".button");
let result =  document.querySelector(".result");
let result1 =  document.querySelector(".result1");

let local = date.toLocaleTimeString();

result1.innerHTML=local;


button.addEventListener("click",function(){
   
    

    setTimeout( function(){
        let dates = new Date();
        
        let locals = dates.toLocaleTimeString();
        alert("HI RAJESH");
        result.innerHTML = locals;
        result.style.border="2px solid black";


    },1000);


})




// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getHours());

// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());