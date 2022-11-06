//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import {gallery} from'./gallery'

for (let g of gallery ){
    let g_images = document.getElementById("m" + g.id)
    g_images.innerHTML = `
    <img src="${g.car}" class="img-fluid" alt="${g.title}">

    `

    g_images.onclick = function(){
        displayCars(g)
    }

}

let featured_gallery = document.querySelector('.featured')
function displayCars(galleries){
    featured_gallery.innerHTML = `
    <div class="card">
    <div class="card-header">
     <h1>${galleries.title}</h1>
    </div>
    <img src="${galleries.car}" class="card-img-top" alt="${galleries.title}">
    <div class="card-body">
      <h5 class="card-title"><small>${galleries.title} </small></h5>
      <p class="card-text"> ${galleries.description}</p>
      
    </div>
   
  </div>
    `
}

