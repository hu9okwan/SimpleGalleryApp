let formElem = document.querySelector(".input-area");
let thumbBarElem = document.querySelector("#thumb-bar")

formElem.style.visibility = "hidden";


function insertImages() {
    for (let i = 1; i <= 5; i++) {
        let image = document.createElement("img");
        image.setAttribute("src",`images/pic${i}.jpg`);
        thumbBarElem.appendChild(image);
    }
}

insertImages();