let red=document.querySelector(".red") ;
let ptag=document.querySelector(".price-tag");
let ban=document.querySelector(".banner");
let blue=document.querySelector(".blue");
let shoe1=document.querySelector(".shoe1");
let shoe2=document.querySelector(".shoe2");


red.addEventListener("click",()=>{
    ptag.classList.add("change");
    ban.classList.add("change");
    shoe1.classList.add("shoe4");
    shoe2.classList.add("shoe3");

})

blue.addEventListener("click",()=>{
    ptag.classList.remove("change");
    ban.classList.remove("change");
    shoe1.classList.remove("shoe4");
    shoe2.classList.remove("shoe3");

})