const card=document.querySelector(".card")
const esas=document.querySelector(".esas")
const item1=document.querySelector(".close")
const button=document.querySelector(".button")
const body=document.querySelector("body")

card.addEventListener("click", function(){
    esas.style.display="block"
    body.style.backgroundColor="#4e4e4bf5"

})
item1.addEventListener("click", function(){
    esas.style.display="none"
    body.style.backgroundColor=""
})
button.addEventListener("click", function(){
    esas.style.display="none"
    body.style.backgroundColor=""
})