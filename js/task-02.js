const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList=document.querySelector('ul');
const liNodes=[];

ingredients.forEach(el=>{
const li= document.createElement('li')
liNodes.push(li)


 li.classList.add('item')
 li.textContent=el;

})
ulList.append(...liNodes)
 