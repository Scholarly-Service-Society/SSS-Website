let images = ["images/gallery/Mansfield Park Cleanup.png", "images/gallery/Aaronsen Road Cleanup.png", "images/gallery/Online AI Discussion Panel.png", "images/gallery/Sandwich Donation Drive.png", "images/gallery/Tree Branch Cleanup.png", "images/gallery/Hedding Kinkora Road Cleanup.png", "images/gallery/Anker Park Cleanup.png"];
let descriptions = ["Mansfield Park Cleanup, New Jersey", "Aaronsen Road Cleanup, New Jersey", "Online AI Discussion Panel", "Sandwich Donation Drive, New Jersey", "Tree Branch Cleanup, New Jersey", "Hedding Kinkora Road Cleanup, New Jersey", "Anker Park Cleanup, New Jersey"];

let $container = $(".imagesGalleryImages");

$container.html("");

for (let i = 0; i < images.length; i++) {
    let img = document.createElement("img");
    img.src = images[i];
    img.alt = descriptions[i];
    img.classList.add("imageGalleryImageSmall");
    img.id = descriptions[i];

    $container.append(`<img src="${images[i]}" alt="${descriptions[i]}" class="imageGalleryImageSmall" id = "${descriptions[i]}">`);

    if (i === 0) {
        changeImage(images[i], descriptions[i], descriptions[i]);

        document.getElementById(descriptions[i]).classList.add("active");
    }
}

function changeImage(src, alt, desc) {
    document.querySelector(".imagesGalleryMainImage").style.opacity = "0";

    window.setTimeout(function () {
        document.querySelector(".imagesGalleryMainImage").style.opacity = "1";

        let $mainImage = $(".imagesGalleryMainImage");
        $mainImage.attr("src", src);
        $mainImage.attr("alt", alt);
        $(".imagesGalleryMainCaption").html(desc);
    }, 250);
}

let allImgs = document.querySelectorAll(".imageGalleryImageSmall");
for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].addEventListener("click", function () {
        changeImage(this.src, this.alt, this.id);

        for (let ii = 0; ii < allImgs.length; ii++) {
            allImgs[ii].classList.remove("active");
        }

        this.classList.add("active");
    });
}

function nextImage() {
    let currentImage = document.querySelector(".active");
    let curDesc = currentImage.id;

    let curIdx = descriptions.indexOf(curDesc);
    let nextSrc;

    if (curIdx === images.length - 1) {
        nextSrc = images[0];
    } else {
        nextSrc = images[curIdx + 1];
    }

    let nextDesc = descriptions[images.indexOf(nextSrc)];

    changeImage(nextSrc, nextDesc, nextDesc);

    for (let ii = 0; ii < allImgs.length; ii++) {
        allImgs[ii].classList.remove("active");
    }

    document.getElementById(nextDesc).classList.add("active");
}

document.querySelector(".btnRight").addEventListener("click", function () {
    nextImage();
});

function prevImage() {
    let currentImage = document.querySelector(".active");
    let curDesc = currentImage.id;

    let curIdx = descriptions.indexOf(curDesc);
    let prevSrc;

    if (curIdx === 0) {
        prevSrc = images[images.length - 1];
    } else {
        prevSrc = images[curIdx - 1];
    }

    let prevDesc = descriptions[images.indexOf(prevSrc)];

    changeImage(prevSrc, prevDesc, prevDesc);

    for (let ii = 0; ii < allImgs.length; ii++) {
        allImgs[ii].classList.remove("active");
    }

    document.getElementById(prevDesc).classList.add("active");
}

document.querySelector(".btnLeft").addEventListener("click", function () {
    prevImage();
});