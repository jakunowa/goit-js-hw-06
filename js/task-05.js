const inputEl= document.querySelector('#name-input')
const spanEl=document.querySelector('#name-output')

 function showValue(){
    if(inputEl.value!==''){
    spanEl.textContent=inputEl.value
}else{
spanEl.textContent='Anonymous'
}}

showValue()
inputEl.addEventListener('keyup', showValue)
