const petalContainer = document.getElementById("petal-container");
const petalImages = ["img/petal.png", "img/petal2.png", "img/petal3.png"];

function createPetal() {
  const petal = document.createElement("img");
  petal.src = petalImages[Math.floor(Math.random() * petalImages.length)];
  petal.classList.add("petal");

  // Posição inicial aleatória no topo
  petal.style.left = `${Math.random() * 100}vw`;

  // Define um tamanho aleatório para a pétala
  const size = Math.random() * 15 + 15; // Entre 15px e 27px
  petal.style.width = `${size}px`;

  // Define um deslocamento horizontal aleatório
  const drift = Math.random() * 40 - 20; // Entre -20vw e +20vw
  petal.style.setProperty("--drift", `${drift}vw`);

  // Duração da animação aleatória
  const duration = Math.random() * 3 + 2; // Entre 3s e 6s
  petal.style.animationDuration = `${duration}s`;

  // Rotação inicial aleatória
  const rotation = Math.random() * 360;
  petal.style.transform = `rotate(${rotation}deg)`;

  petalContainer.appendChild(petal);

  // Remove a pétala quando a animação termina
  setTimeout(() => petal.remove(), duration * 1000);
}

// Criar pétalas continuamente sem sobrecarregar a página
setInterval(createPetal, 500);
