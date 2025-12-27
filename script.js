/* DARK MODE */
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

/* TYPING ANIMATION */
const text = "Billy Reyes";
let index = 0;
const speed = 120;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-name").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}
typeEffect();