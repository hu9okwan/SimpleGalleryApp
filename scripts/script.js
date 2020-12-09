let formElem = document.querySelector(".input-area");
let thumbBarElem = document.querySelector("#thumb-bar");
let mainImageElem = document.querySelector(".displayed-img");

formElem.style.visibility = "hidden";


function insertImages() {
    for (let i = 1; i <= 5; i++) {
        let image = document.createElement("img");
        image.setAttribute("src",`images/pic${i}.jpg`);
        image.setAttribute("alt",`Image ${i}`);
        thumbBarElem.appendChild(image);
    }
}

insertImages();


thumbBarElem.addEventListener("mouseover", onImageHover);

function onImageHover(event) {

    formElem.style.visibility = "visible";

    mainImageElem.setAttribute("src", `${event.target.src}`)
    mainImageElem.setAttribute("alt", `Enlarged ${event.target.alt}`)

}