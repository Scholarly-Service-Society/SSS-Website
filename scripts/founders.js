let $foundersContainer = $(".foundersContainer");

$foundersContainer.empty();

let foundersKeys = Object.keys(founders);

let founder = document.createElement("div");
founder.classList.add("founder");


for(let i = 0; i < foundersKeys.length; i++) {
    let founder = document.createElement("div");
    founder.classList.add("founder");

    let founderLeft = document.createElement("div");
    founderLeft.classList.add("founderLeft");

    let founderSubtitle = document.createElement("div");
    founderSubtitle.classList.add("pageSectionSubtitle");
    founderSubtitle.classList.add("founderSubtitle");
    founderSubtitle.innerHTML = founders[foundersKeys[i]].name;

    let founderDescription = document.createElement("div");
    founderDescription.classList.add("founderDescription");
    founderDescription.innerHTML = founders[foundersKeys[i]].description;

    founderLeft.append(founderSubtitle);
    founderLeft.append(founderDescription);

    let founderRight = document.createElement("div");
    founderRight.classList.add("founderRight");

    let founderImage = document.createElement("img");
    founderImage.classList.add("founderImage");
    founderImage.src = founders[foundersKeys[i]].image;
    founderImage.alt = founders[foundersKeys[i]].name;

    founderRight.append(founderImage);

    if(innerWidth < 1250) {
        founder.append(founderLeft);
        founder.append(founderRight);
    } else {
        if(i === 0) {
            founder.append(founderLeft);
            founder.append(founderRight);
        } else {
            founder.append(founderRight);
            founder.append(founderLeft);
        }
    }

    $foundersContainer.append(founder);
}
