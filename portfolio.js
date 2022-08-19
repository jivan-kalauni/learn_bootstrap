let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.onscroll=function () {
    if (document.documentElement.scrollTop) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menubtn = document.querySelector(".menu-btn");
let canclebtn = document.querySelector(".cancle-btn");

menubtn.addEventListener("click", function () {
    navBar.classList.add("active");
    menubtn.style.opacity = "0";
    menubtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none";
    
})
canclebtn.addEventListener("click", function () {
    navBar.classList.remove("active");
    menubtn.style.opacity = "1";
    menubtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
})

let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach(function (navLinks) {
    navLinks.addEventListener("click", function () {
        navBar.classList.remove("active");
        menubtn.style.opacity = "1";
        // menubtn.style.pointerEvents = "auto";
    })
})
