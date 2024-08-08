let footer = document.querySelector("footer");

footer.innerHTML = "";

let footerLeft = document.createElement("div");
footerLeft.classList.add("footerLeft");
footerLeft.innerHTML = `<i class="fa-regular fa-copyright"></i> Scholarly Service Society`;

let footerRight = document.createElement("div");
footerRight.classList.add("footerRight");
footerRight.textContent = "Website by Ishbir Singh";

footer.appendChild(footerLeft);
footer.appendChild(footerRight);