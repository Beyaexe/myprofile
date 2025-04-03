const petalContainer = document.getElementById("lamp-container");
const petalImages = "img/lamp.png";

function createLamp() {
  const lamp = document.createElement("img");
  lamp.src = petalImages;
  lamp.classList.add("petal");

  petal.style.left = `${Math.random() * 100}vw`;

  const size = Math.random() * 15 + 15; 
  petal.style.width = `${size}px`;

  const drift = Math.random() * 40 - 20; 
  petal.style.setProperty("--drift", `${drift}vw`);

  const duration = Math.random() * 2 + 2; 
  petal.style.animationDuration = `${duration}s`;

  const rotation = Math.random() * 360;
  petal.style.transform = `rotate(${rotation}deg)`;

  petalContainer.appendChild(petal);

  setTimeout(() => petal.remove(), duration * 1000);
}
setInterval(createPetal, 400);

