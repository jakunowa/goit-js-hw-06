const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


for( const image of images){
  console.log(image)
  const ulEl= document.querySelector('.gallery')
  const liEl = document.createElement('li')
  ulEl.appendChild(liEl)
  liEl.insertAdjacentHTML("afterbegin",`<img src="${image.url}" />`)
  liEl.style.height='120px'
  liEl.style.display='flex'
  liEl.style.justifyContent='center'
  liEl.style.margin='30px'
}
