const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



for( const el of ingredients){
 const ulList=document.querySelector('ul');
 
 const ingredient= document.createElement('li')
ulList.appendChild(ingredient)


 ingredient.classList.add('item')
 ingredient.textContent=el;

 console.log(ingredient)
}