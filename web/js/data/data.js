/*
    data.js array de js
*/

"use strict";
/*
<div class="container">
    <div class="row">
        <div class="photo-block col-md-4">
            <div class="photo-header-block">
                <h2 class="photo-title">Paseo nocturno</h2>
                <h3 class="photo-score">Score: 4.52</h3>
            </div>
            <div class="photo-image-block">
                <a href="photo_detail.html">
                    <img class="photo-image"
                    src="https://www.movilzona.es/app/uploads-movilzona.es/2024/01/foto-noche-borrosa.jpg?x=480&y=375&quality=40">
                </a>
            </div>
            <div class="photo-metadata-block">
                <p class="photo-description">Así es una noche en mi vida.</p>
            </div>
            <div class="photo-edit-block">
                <button class="btn btn-primary">Edit this photo</button>
                <button class="btn btn-danger">Delete this photo</button>
            </div>
        </div>

        <div class="photo-block col-md-4">
            <div class="photo-header-block">
                <h2 class="photo-title">Mamáh</h2>
                <h3 class="photo-score">Score: 3.33</h3>
            </div>
            <div class="photo-image-block">
                <img class="photo-image"
                    src="https://c8.alamy.com/compes/gdw7wg/rostros-de-personas-muy-borrosa-gdw7wg.jpg">
            </div>
            <div class="photo-metadata-block">
                <p class="photo-description">De las MAS personajas de Triana.</p>
            </div>
            <div class="photo-edit-block">
                <button class="btn btn-primary">Edit this photo</button>
                <button class="btn btn-danger">Delete this photo</button>
            </div>
        </div>
        <div class="photo-block col-md-4">
            <div class="photo-header-block">
                <h2 class="photo-title">Trabajando</h2>
                <h3 class="photo-score">Score: 5.02</h3>
            </div>
            <div class="photo-image-block">
                <img class="photo-image"
                    src="https://assets-global.website-files.com/5ff8126e9f80b718dc63f907/651c1aa8cce345e212373045_why-do-i-have-blurry-vision-after-lasik-and-how-to-prevent-it.webp">
            </div>
            <div class="photo-metadata-block">
                <p class="photo-description">Se me quedó sin batería el ordenador.</p>
            </div>
            <div class="photo-edit-block">
                <button class="btn btn-primary">Edit this photo</button>
                <button class="btn btn-danger">Delete this photo</button>
            </div>
        </div>
        <div class="photo-block col-md-4">
            <div class="photo-header-block">
                <h2 class="photo-title">Carnavales</h2>
                <h3 class="photo-score">Score: 3.1</h3>
            </div>
            <div class="photo-image-block">
                <img class="photo-image"
                    src="https://i.redd.it/diy-cordelius-costume-for-my-son-v0-8qxc7absq7xb1.jpg?width=3000&format=pjpg&auto=webp&s=28758f533bd219537b8619e9918048dd0c3d881a">
            </div>
            <div class="photo-metadata-block">
                <p class="photo-description">Disfraz de Cordelius</p>
            </div>
            <div class="photo-edit-block">
                <button class="btn btn-primary">Edit this photo</button>
                <button class="btn btn-danger">Delete this photo</button>
            </div>
        </div>
    </div>
</div>
*/

const galleryPhotos = [
    {   photoId:0,
        title:"Paseo nocturno",
        description:"A very good boy.",
        score: 4.52,
        userphotoId: 1, date:"22/12/2016",
        url:"https://www.movilzona.es/app/uploads-movilzona.es/2024/01/foto-noche-borrosa.jpg?x=480&y=375&quality=40",
        userId: "1: Carlos"
       
    },
    {   photoId:1,
        title:"Mamáh",
        description:"A typical Spanish tortilla. With onion, of course.",
        score: 3.33,
        userphotoId: 2,date:"22/12/2017",
        url:"https://c8.alamy.com/compes/gdw7wg/rostros-de-personas-muy-borrosa-gdw7wg.jpg",
        userId: "2: Margarita"
    },
    {   photoId:2,
        title:"Trabajando",
        description:"A piece of very intricate code",
        score: 5.02,
        userphotoId: 3,date:"22/12/2018",
        url:"https://assets-global.website-files.com/5ff8126e9f80b718dc63f907/651c1aa8cce345e212373045_why-do-i-have-blurry-vision-after-lasik-and-how-to-prevent-it.webp",
        userId: "3: Dany"
    },
    {   photoId:3,
        title:"Carnavales",
        description:"This is what society would look like if PHP didn't exist",
        score: 4.9,
        userphotoId: 4,date:"22/12/2019",
        url:"https://i.redd.it/diy-cordelius-costume-for-my-son-v0-8qxc7absq7xb1.jpg?width=3000&format=pjpg&auto=webp&s=28758f533bd219537b8619e9918048dd0c3d881a",
        userId: "4: Inma"
    }
];

export { galleryPhotos }