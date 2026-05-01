const button = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

button.addEventListener("click", () => {
  surpriseMessage.classList.remove("hidden");
  button.textContent = "I love you ❤️";
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);