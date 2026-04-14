const container = document.querySelector(".container");
const bg = document.querySelector(".bg");

// =========================
// 1. MOUSE 3D CAMERA
// =========================
document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.clientX) / 40;
    let y = (window.innerHeight / 2 - e.clientY) / 40;

    container.style.transform = `
        perspective(1200px)
        rotateY(${x}deg)
        rotateX(${y}deg)
    `;

    bg.style.transform = `scale(1.1) translate(${x * 0.5}px, ${y * 0.5}px)`;
});

// =========================
// 2. SCROLL REVEAL ENGINE
// =========================
const elements = document.querySelectorAll(
    ".hero, .container h1, .container h2, .container h3, p, li, img, .btn"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));
function showAlert() {
    alert("Hello! This is your alert message.");
}
const button = document.getElementById("submitBtn");

button.addEventListener("click", () => {
    const input = document.getElementById("userInput").value;
    document.getElementById("outputText").textContent = input;
});
