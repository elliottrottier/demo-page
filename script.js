const container = document.querySelector(".container");

// ===============================
// 1. 3D MOUSE TILT (IMPROVED)
// ===============================
document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.clientX) / 30;
    let y = (window.innerHeight / 2 - e.clientY) / 30;

    container.style.transform = `
        perspective(1000px)
        rotateY(${x}deg)
        rotateX(${y}deg)
        translateY(-5px)
    `;
});

// ===============================
// 2. SCROLL REVEAL SYSTEM
// ===============================
const elements = document.querySelectorAll("h2, h3, p, .secondary-pic, li");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0px)";
        }
    });
}, {
    threshold: 0.1
});

elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.6s ease";
    observer.observe(el);
});

// ===============================
// 3. BACKGROUND PARALLAX
// ===============================
document.addEventListener("mousemove", (e) => {
    const bg = document.querySelector(".bg");

    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    bg.style.transform = `
        translate(${x * 20}px, ${y * 20}px)
        scale(1.1)
    `;
});
