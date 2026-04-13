document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".container");

    if (!card) return;

    document.addEventListener("mousemove", (e) => {
        let x = (window.innerWidth / 2 - e.clientX) / 25;
        let y = (window.innerHeight / 2 - e.clientY) / 25;

        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
});
