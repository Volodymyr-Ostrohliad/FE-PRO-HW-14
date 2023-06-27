'use strict'
const div = document.createElement('div')
div.classList.add('div')
document.body.appendChild(div)
const images = ['image-01.jpg', 'image-02.jpg', 'image-03.jpg', 'image-04.jpeg', 'image-05.jpeg', 'image-06.jpeg',
  'image-07.jpg', 'image-08.jpg', 'image-09.jpg'];


const randomImage = Math.floor(Math.random() * images.length);

const img = document.createElement('img');
img.classList.add('img')
img.src = `/images/${images[randomImage]}`;

img.style.position = 'fixed';
img.style.top = '50%';
img.style.left = '50%';
img.style.transform = 'translate(-50%, -50%)';


document.body.querySelector('.div').appendChild(img)
