let formElem = document.querySelector(".input-area");
let thumbBarElem = document.querySelector("#thumb-bar");
let mainImageElem = document.querySelector(".displayed-img");
let submitButtonElem = document.querySelector("button");
let inputElem = document.querySelector("#effect");

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

    if (event.target.nodeName === "IMG") {
        mainImageElem.setAttribute("src", `${event.target.src}`)
        mainImageElem.setAttribute("alt", `Enlarged ${event.target.alt}`)
        mainImageElem.setAttribute("width", "100%")
        mainImageElem.setAttribute("height", "100%")
    }
}


submitButtonElem.addEventListener("click", onSubmitClick);

function onSubmitClick() {

    if (inputElem.value === "blur") {
        if (!mainImageElem.alt.includes("Blurred")){
            let currentImgSrc = mainImageElem.src;
            let splitSrc = currentImgSrc.split(".jpg");
            let blurredImgSrc = splitSrc[0] + "B.jpg";

            mainImageElem.src = blurredImgSrc;
            mainImageElem.alt += " (Blurred)";
        }
        else
        {
            alert("The image is already blurred.")
        }
    } 
    else {
        alert("Sorry, this effect has not been implemented yet!")
    }

    inputElem.value = "";
}