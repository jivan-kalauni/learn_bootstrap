const menuBtn = document.querySelector(".menu-btn");
const cancleBtn = document.querySelector(".cancle-btn");
const navBar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", function () {
    navMenu.style.display = "block";
    menuBtn.style.opacity = "0";
})