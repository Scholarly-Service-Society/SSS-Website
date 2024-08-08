let $navRight = $(".navRight");

let links = ["Chapters", "Volunteering", "Founders", "Projects", "Partnerships"];
let hrefs = ["chapters.html", "volunteering.html", "founders.html", "projects.html", "partnerships.html"];

$navRight.html("");

if(innerWidth > 1250) {
    let navLinks = document.createElement("div");
    navLinks.classList.add("navLinks");

    for (let i = 0; i < links.length; i++) {
        let a = document.createElement("a");
        a.href = hrefs[i];
        a.classList.add("navLink");
        a.innerHTML = links[i];
        navLinks.append(a);
    }

    let a = document.createElement("a");
    a.href = "contact.html";
    a.classList.add("navLink");
    a.classList.add("contactLink");
    a.innerHTML = "Contact Us";
    navLinks.append(a);

    $navRight.append(navLinks);
} else {
    let navBurger = document.createElement("div");
    navBurger.classList.add("navBurger");
    navBurger.innerHTML = `<i class = "fas fa-bars"></i>`;
    $navRight.append(navBurger);

    let navLinksMobile = document.createElement("div");
    navLinksMobile.classList.add("navLinksMobile");

    for (let i = 0; i < links.length; i++) {
        let a = document.createElement("a");
        a.href = hrefs[i];
        a.classList.add("navLinkMobile");
        a.innerHTML = links[i];
        navLinksMobile.append(a);
    }

    let a = document.createElement("a");
    a.href = "contact.html";
    a.classList.add("navLinkMobile");
    a.classList.add("contactLink");
    a.innerHTML = "Contact Us";
    navLinksMobile.append(a);

    $navRight.append(navLinksMobile);

    document.querySelector(".navBurger").addEventListener("click", function() {
        let navLinksMobile = document.querySelector(".navLinksMobile");
        if(navLinksMobile.style.display === "none" || navLinksMobile.style.display === "") {
            navLinksMobile.style.display = "block";

            this.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        } else {
            navLinksMobile.style.display = "none";

            this.innerHTML = `<i class="fa-solid fa-bars"></i>`
        }
    });
}