const  inputEl=document.querySelector('#validation-input')

function checkPassword(){
    if(inputEl.value.length=== +inputEl.dataset.length){
        inputEl.className='valid'
    }else{
        inputEl.className='invalid'
    }
}
checkPassword()
inputEl.addEventListener('blur', checkPassword)

// const inputEl = document.getElementById('validation-input');

// inputEl.addEventListener('blur', () => {
//   inputEl.value.length === inputEl.dataset.length
//     ? (inputEl.className = 'valid')
//     : (inputEl.className = 'invalid');
// });
