"use strict";

import { parseHTML } from "../utils/parseHTML.js"; //Crea nodos DOM con fuente HTML
const photoRenderer = {
    asCard: function (photo) {
        let html = `
        <div class="photo-block col-md-4">
        <div class="photo-header-block">
            <h2 class="photo-title">${photo.title}</h2>
            <h3 class="photo-score">${photo.score}</h3>
        </div>
        <div class="photo-image-block">
            <a href="photo_detail.html">
                <img class="photo-image"
                src=${photo.url}>
            </a>
        </div>
        <div class="photo-metadata-block">
            <p class="photo-description">${photo.description}</p>
        </div>
        <div class="photo-edit-block">
            <button class="btn btn-primary">Edit this photo</button>
            <button class="btn btn-danger">Delete this photo</button>
        </div>
    </div>
    `;
        return parseHTML(html);
    },

    asDetail: function (photo) {
        let html = `
        <div class="col-md">
            <h3>${photo.title}</h3>
            <h6>${photo.description}</h6>
            <p>Uploaded by <a href="user_profile.html">${photo.user}</a> on ${photo.date}</p>
            <hr>
            <img src=${photo.url} class="img-fluid">
        </div>
        `;

        return parseHTML(html);
    }
}

export { photoRenderer }