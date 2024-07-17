document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-button");
    const navLinks = document.querySelector(".menu");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
