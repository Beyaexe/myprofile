const lampContainer = document.getElementById("lamp-container");
const lampImages = "img/lamp.png";

function createLamp() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("lamp-wrapper");

  const lamp = document.createElement("img");
  lamp.src = lampImages;
  lamp.classList.add("lamp");

  const size = Math.random() * 55 + 55;
  const duration = Math.random() * 4 + 12;
  const swingSpeed = Math.random() * 2 + 3;
  const rotateSpeed = Math.random() * 1.5 + 1.5;
  const rotateDeg = Math.random() * 20 + 10;
  const opacity = Math.random() * 0.5 + 0.5;

  const left = Math.random() * 95;
  wrapper.style.left = `${left}vw`;

  const safeMargin = 100;
  const randomOffset = Math.random() * 30;
  const startY = window.scrollY + window.innerHeight - safeMargin - randomOffset;
  wrapper.style.top = `${startY}px`;

  wrapper.style.animationDuration = `${duration}s`;
  wrapper.style.opacity = 0;
  wrapper.style.transition = "opacity 1s ease-in";

  lamp.style.width = `${size}px`;
  lamp.style.opacity = opacity;
  lamp.style.setProperty("--swing-speed", `${swingSpeed}s`);
  lamp.style.setProperty("--rotate-speed", `${rotateSpeed}s`);
  lamp.style.setProperty("--rotate-deg", `${rotateDeg}deg`);

  wrapper.appendChild(lamp);
  lampContainer.appendChild(wrapper);

  // Suaviza o aparecimento
  requestAnimationFrame(() => {
    wrapper.style.opacity = opacity;
  });

  wrapper.addEventListener("animationend", () => wrapper.remove());
}

function createMultipleLamps(count = 3) {
  for (let i = 0; i < count; i++) {
    setTimeout(createLamp, i * (500 + Math.random() * 300));
  }
}

setInterval(() => createMultipleLamps(2), 3000);
