"use strict";
import { parseHTML } from "../utils/parseHTML.js"; //Crea nodos DOM con fuente HTML
import { photoRenderer } from "./photos.js";
const galleryRenderer = {
    asCardGallery: function (photos) {
        //Para todos los elementos del array a una caja
        let container = parseHTML(`<div class="row"></div>`);
        for (let photo of photos) {
            container.appendChild(photoRenderer.asCard(photo));
        }
        return container;
    }
}

export { galleryRenderer }