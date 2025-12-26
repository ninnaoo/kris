let infos = document.querySelectorAll(".info");
let currentOpen = null;

for (let n = 1; n <= 3; n++) {
    document.getElementById("b" + n).onclick = function() {
        let info = document.getElementById("i" + n);
        if (currentOpen === info) {
            info.classList.remove("show");
            currentOpen = null;
            return;
        }
        infos.forEach(i => i.classList.remove("show"));
        info.classList.add("show");
        currentOpen = info;
    }
}

const snowCount = 80;
for (let i = 0; i < snowCount; i++) {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.fontSize = (Math.random() * 10 + 10) + "px";
    snow.style.opacity = Math.random();
    snow.style.animationDuration = (Math.random() * 5 + 5) + "s";
    snow.style.animationDelay = Math.random() * 5 + "s";
    snow.textContent = "❄";
    document.body.appendChild(snow);
}

const gift = document.getElementById('gift');
gift.addEventListener('click', () => {
    const heartsCount = 13;
    for (let i = 0; i < heartsCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        const x1 = (Math.random() * 60 - 30) + 'px';
        const y1 = -(Math.random() * 50 + 30) + 'px';
        const x2 = (Math.random() * 80 - 40) + 'px';
        const y2 = -(Math.random() * 100 + 60) + 'px';
        const x3 = (Math.random() * 100 - 50) + 'px';
        const y3 = -(Math.random() * 150 + 100) + 'px';
        heart.style.setProperty('--x1', x1);
        heart.style.setProperty('--y1', y1);
        heart.style.setProperty('--x2', x2);
        heart.style.setProperty('--y2', y2);
        heart.style.setProperty('--x3', x3);
        heart.style.setProperty('--y3', y3);
        heart.style.animationDuration = (Math.random() * 0.5 + 0.8) + 's';
        gift.appendChild(heart);
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
});