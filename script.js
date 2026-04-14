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
document.getElementById("submitBtn").addEventListener("click", () => {
    let input = document.getElementById("userInput").value.toLowerCase();
    let output = document.getElementById("outputText");

    if (input === "yes") {
        output.textContent = "Nice. You're on the right path.";
    } else if (input === "no") {
        output.textContent = "You might change your mind once you get better.";
    } else {
        output.textContent = "Please answer with 'yes' or 'no'.";
    }
});
function checkAnswer(answer) {
    const result = document.getElementById("quizResult");

    if (answer === "correct") {
        result.textContent = "Correct. Nice thinking.";
        startBalloons();
    } else {
        result.textContent = "Wrong answer.";
        startRain();
    }
}

function startBalloons() {
    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement("div");

        balloon.innerHTML = "🎈";
        balloon.style.position = "fixed";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.bottom = "-50px";
        balloon.style.fontSize = "30px";
        balloon.style.animation = "floatUp 3s linear forwards";

        document.body.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 3000);
    }
}
