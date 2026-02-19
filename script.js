/* ================= COUNTDOWN ================= */
const festDate = new Date("March 07, 2026 09:00:00").getTime();
const countdown = document.getElementById("countdown");

function createUnit(label) {
    return `
        <div class="flip-unit">
            <div class="flip-box">00</div>
            <span class="flip-label">${label}</span>
        </div>
    `;
}

countdown.innerHTML = `
    <div class="flip-wrapper">
        ${createUnit("Days")}
        ${createUnit("Hours")}
        ${createUnit("Minutes")}
        ${createUnit("Seconds")}
    </div>
`;

const boxes = document.querySelectorAll(".flip-box");

function updateFlip(box, newValue) {
    if (box.textContent === newValue) return;

    box.classList.add("flip-animate");

    setTimeout(() => {
        box.textContent = newValue;
    }, 300);

    box.addEventListener("animationend", () => {
        box.classList.remove("flip-animate");
    }, { once: true });
}

setInterval(() => {

    const now = new Date().getTime();
    const distance = festDate - now;
    if (distance < 0) return;

    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

    updateFlip(boxes[0], days);
    updateFlip(boxes[1], hours);
    updateFlip(boxes[2], minutes);
    updateFlip(boxes[3], seconds);

}, 1000);



/* ================= EVENT TOGGLE ================= */

function showEvents(type) {

    const technical = document.getElementById("technical");
    const nontechnical = document.getElementById("nontechnical");

    technical.style.display = "none";
    nontechnical.style.display = "none";

    if (type === "technical") {
        technical.style.display = "block";
    } else {
        nontechnical.style.display = "block";
    }
}
function toggleHelp() {
    document.getElementById("helpPanel").classList.toggle("active");
}

