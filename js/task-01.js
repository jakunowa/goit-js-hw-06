const liItem= document.querySelectorAll(".item")
console.log(`Number of Categories ${liItem.length}`)

for(const el of liItem){
    console.log(`Category: ${el.querySelector('h2').innerText}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`)
    
}

