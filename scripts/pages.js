let footer = document.querySelector("footer");

footer.innerHTML = "";

let footerLeft = document.createElement("div");
footerLeft.classList.add("footerLeft");
footerLeft.innerHTML = `<i class="fa-regular fa-copyright"></i> Scholarly Service Society`;

let footerRight = document.createElement("div");
footerRight.classList.add("footerRight");
footerRight.innerHTML = 'Website by <a href="https://www.linkedin.com/in/ishbir-singh/" target="_blank" style="color: var(--dark);">Ishbir Singh</a>';

footer.appendChild(footerLeft);
footer.appendChild(footerRight);