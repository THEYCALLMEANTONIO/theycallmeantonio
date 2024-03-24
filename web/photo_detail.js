"use strict";
import { galleryPhotos } from "./js/data/data.js";
import { photoRenderer } from "./js/renderers/photos.js";

/*
<div class="col-md">
                    <h3>Paseo nocturno</h3>
                    <h6>Así es una noche en mi vida.</h6>
                    <p>Uploaded by <a href="user_profile.html">User 1</a> on 12/01/2021</p>
                    <hr>
                    <img src="https://www.movilzona.es/app/uploads-movilzona.es/2024/01/foto-noche-borrosa.jpg?x=480&y=375&quality=40" class="img-fluid">
                </div>
*/

const urlParams = new URLSearchParams(window.location.search);
const photoId = urlParams.get('photoId');

function main(){
    let container = document.getElementById("photo-detail");
    container.appendChild(photoRenderer.asDetail(galleryPhotos[photoId]));
}

document.addEventListener("DOMContentLoaded", main);
