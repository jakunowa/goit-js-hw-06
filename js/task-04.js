const minusBtn= document.querySelector('button[data-action="decrement"]')
const addBtn= document.querySelector('button[data-action="increment"]')
const spanEl=document.querySelector('#value')



let counterValue= 0;
function minus(){
counterValue--
spanEl.textContent=counterValue

}

function add(){
    counterValue++
    spanEl.textContent=counterValue
    
    }


minusBtn.addEventListener('click', minus)
addBtn.addEventListener('click', add)