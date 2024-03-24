"use strict"

import { galleryPhotos } from "./js/data/data.js";
import { galleryRenderer } from "./js/renderers/gallery.js";

function main(){
    let elementoPrueba = document.getElementById("prueba");
    elementoPrueba.className="text-center";

    let newH2 = document.createElement("h2");
    newH2.textContent = "Recent posts";
    elementoPrueba.appendChild(newH2) //añade a elementoPrueba (inicialmente vacío) un nuevo elemento.

    console.log(galleryPhotos);
    let galleryContainer = document.getElementById("galleryContainer");
    galleryContainer.appendChild(galleryRenderer.asCardGallery(galleryPhotos));
}

document.addEventListener("DOMContentLoaded", main);