const galerieImage = document.getElementById("allImages");

let monImage= getImage("titre", "../images/food.jpg");

galerieImage.innerHTML = monImage;

function getImage(titre, urlImage){
    titre = sanitazeHtml(titre);
    urlImage = sanitazeHtml(urlImage);
    return ` <div class="col p-3">
                <div class="image-card text-white">
                    <img src="${urlImage}" class="rounded w-100"/>
                        <p class="titre-image" >${titre}</p>
                    <div class="action-image-buttons" data-show="ROLE_ADMIN" >
                        <button type="button" class="btn btn-outline-light"data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></i></button>
                        <button type="button" class="btn btn-outline-light"data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"></i><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>`;
}