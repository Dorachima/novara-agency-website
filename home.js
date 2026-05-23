const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
    sideMenu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("show");
});

// home.js

const texts = [
    "Digital Experiences",
    "Modern Websites",
    "Branding Solutions",
    "Mobile Applications"
];

let index = 0;

const changingText = document.getElementById("changing-text");

setInterval(() => {

    changingText.style.opacity = "0";

    setTimeout(() => {

        index++;

        if(index >= texts.length){
            index = 0;
        }

        changingText.textContent = texts[index];

        changingText.style.opacity = "1";

    }, 500);

}, 3000);

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;

        const sectionTop = section.getBoundingClientRect().top;

        const revealPoint = 150;

        if(sectionTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
