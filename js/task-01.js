const liItem= document.querySelectorAll(".item")
console.log(`Number of Categories ${liItem.length}`)

for(const el of liItem){
    console.log(`Category: ${el.children[0].innerText}`);
    console.log(`Elements: ${el.children[1].children.length}`)
}