const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const img = document.querySelector(".valentine-img");

yesBtn.addEventListener("click", () => {
  message.innerHTML = "YEYYYY MWAAA!!💖";

  // zoom image
  img.style.transform = "scale(1.15)";
  img.style.transition = "0.5s";

  // background glow
  document.body.style.background = "linear-gradient(135deg, #ff6c87ff, #ffb3c6)";

  // hearts effect
  createHearts();
});

function moveNoButton() {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animation = "floatUp 3s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}
