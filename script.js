/* ================================= */
/* SCROLL ANIMATION (SMOOTH) */
/* ================================= */

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => observer.observe(section));

});


/* ================================= */
/* SMOOTH TYPING ANIMATION */
/* ================================= */

document.addEventListener("DOMContentLoaded", () => {

    const texts = [
        "Data Analyst",
        "AI & ML Enthusiast",
        "Machine Learning Engineer",
        "Python Developer"
    ];

    const typingElement = document.getElementById("typing-text");

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect(){

        const currentText = texts[textIndex];

        if(isDeleting){
            charIndex--;
        } else {
            charIndex++;
        }

        typingElement.textContent = currentText.substring(0, charIndex);

        let speed = isDeleting ? 40 : 80;

        if(!isDeleting && charIndex === currentText.length){

            speed = 1500;
            isDeleting = true;

        } 
        else if(isDeleting && charIndex === 0){

            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 400;

        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

});


/* ================================= */
/* THEME TOGGLE */
/* ================================= */

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){

        toggle.innerHTML = "<i class='bx bx-sun'></i>";
        localStorage.setItem("theme","light");

    }else{

        toggle.innerHTML = "<i class='bx bx-moon'></i>";
        localStorage.setItem("theme","dark");

    }

});


/* LOAD SAVED THEME */

if(localStorage.getItem("theme")==="light"){

    document.body.classList.add("light-theme");

    toggle.innerHTML = "<i class='bx bx-sun'></i>";

}