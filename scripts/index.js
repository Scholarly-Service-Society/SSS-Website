let images = ["/images/gallery/Mansfield Park Cleanup.png", "/images/gallery/Aaronsen Road Cleanup.png", "/images/gallery/Online AI Discussion Panel.png", "/images/gallery/Sandwich Donation Drive.png", "/images/gallery/Tree Branch Cleanup.png"];
let descriptions = ["Mansfield Park Cleanup, New Jersey", "Aaronsen Road Cleanup, New Jersey", "Online AI Discussion Panel", "Sandwich Donation Drive, New Jersey", "Tree Branch Cleanup, New Jersey"];

let $container = $(".imagesGalleryImages");

$container.html("");

for(let i = 0; i < images.length; i++) {
    let img = document.createElement("img");
    img.src = images[i];
    img.alt = descriptions[i];
    img.classList.add("imageGalleryImageSmall");
    img.id = descriptions[i];



    $container.append(`<img src="${images[i]}" alt="${descriptions[i]}" class="imageGalleryImageSmall" id = "${descriptions[i]}">`);

    if(i === 0) {
        let $mainImage = $(".imagesGalleryMainImage");
        $mainImage.attr("src", images[i]);
        $mainImage.attr("alt", descriptions[i]);
        $(".imagesGalleryMainCaption").html(descriptions[i]);

        document.getElementById(descriptions[i]).classList.add("active");
    }
}

let allImgs = document.querySelectorAll(".imageGalleryImageSmall");
for(let i = 0; i < allImgs.length; i++) {
    allImgs[i].addEventListener("click", function() {
        let $mainImage = $(".imagesGalleryMainImage");
        $mainImage.attr("src", this.src);
        $mainImage.attr("alt", this.alt);
        $(".imagesGalleryMainCaption").html(this.alt);

        for(let ii = 0; ii < allImgs.length; ii++) {
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

    if(curIdx === images.length - 1) {
        nextSrc = images[0];
    } else {
        nextSrc = images[curIdx + 1];
    }

    let nextDesc = descriptions[images.indexOf(nextSrc)];

    let $mainImage = $(".imagesGalleryMainImage");
    $mainImage.attr("src", nextSrc);
    $mainImage.attr("alt", nextDesc);
    $(".imagesGalleryMainCaption").html(nextDesc);

    for(let ii = 0; ii < allImgs.length; ii++) {
        allImgs[ii].classList.remove("active");
    }

    document.getElementById(nextDesc).classList.add("active");
}

document.querySelector(".btnRight").addEventListener("click", function() {
    nextImage();
});

function prevImage() {
    let currentImage = document.querySelector(".active");
    let curDesc = currentImage.id;

    let curIdx = descriptions.indexOf(curDesc);
    let prevSrc;

    if(curIdx === 0) {
        prevSrc = images[images.length - 1];
    } else {
        prevSrc = images[curIdx - 1];
    }

    let prevDesc = descriptions[images.indexOf(prevSrc)];

    let $mainImage = $(".imagesGalleryMainImage");
    $mainImage.attr("src", prevSrc);
    $mainImage.attr("alt", prevDesc);
    $(".imagesGalleryMainCaption").html(prevDesc);

    for(let ii = 0; ii < allImgs.length; ii++) {
        allImgs[ii].classList.remove("active");
    }

    document.getElementById(prevDesc).classList.add("active");
}

document.querySelector(".btnLeft").addEventListener("click", function() {
    prevImage();
});