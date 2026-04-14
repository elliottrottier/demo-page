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
    for (let i = 0; i < 25; i++) {
        let balloon = document.createElement("div");

        balloon.innerHTML = "🎈";

        balloon.style.position = "fixed";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.bottom = "-50px";

        // 👇 BIGGER + MORE IMPACTFUL
        balloon.style.fontSize = (35 + Math.random() * 25) + "px";

        balloon.style.zIndex = "9999";
        balloon.style.pointerEvents = "none";

        let duration = 2.5 + Math.random() * 2;
        let drift = (Math.random() - 0.5) * 200;

        balloon.style.transition = `transform ${duration}s linear, opacity ${duration}s`;

        document.body.appendChild(balloon);

        setTimeout(() => {
            balloon.style.transform = `translate(${drift}px, -120vh)`;
            balloon.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            balloon.remove();
        }, duration * 1000);
    }
}

function startRain() {
    for (let i = 0; i < 120; i++) {
        let drop = document.createElement("div");

        drop.innerHTML = "💧";

        drop.style.position = "fixed";
        drop.style.left = Math.random() * 100 + "vw";
        drop.style.top = "-10vh";

        // BIGGER DROPS
        drop.style.fontSize = (25 + Math.random() * 25) + "px";

        drop.style.opacity = "0.7";
        drop.style.pointerEvents = "none";
        drop.style.zIndex = "9999";

        document.body.appendChild(drop);

        let duration = 1.5 + Math.random() * 1.5;
        let drift = (Math.random() - 0.5) * 150;

        // FORCE browser to "see" initial state FIRST
        drop.offsetHeight;

        // THEN animate
        drop.style.transition = `transform ${duration}s linear, opacity ${duration}s`;
        drop.style.transform = `translate(${drift}px, 110vh)`;
        drop.style.opacity = "0";

        setTimeout(() => {
            drop.remove();
        }, duration * 1000);
    }
}
const focusBtn = document.getElementById("focusBtn");

focusBtn.addEventListener("click", () => {
    document.body.classList.toggle("focus-mode");

    // optional: label change for clarity
    if (document.body.classList.contains("focus-mode")) {
        focusBtn.textContent = "Exit Focus";
    } else {
        focusBtn.textContent = "Focus Mode";
    }
});
