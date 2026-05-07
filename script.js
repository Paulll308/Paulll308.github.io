const reasons = [
  "You make ordinary days feel special.",
  "Your smile can completely change my mood.",
  "You are thoughtful in ways that really matter.",
  "You are beautiful inside and out.",
  "You make people around you feel comfortable.",
  "You are strong, even when life gets difficult.",
  "You have such a kind heart.",
  "You make me laugh like nobody else.",
  "You care deeply about the people you love.",
  "You are smart, driven, and inspiring.",
  "You have a way of making everything feel warmer.",
  "You are patient, even when I do silly things.",
  "You are supportive and encouraging.",
  "You deserve every good thing coming your way.",
  "You are one of my favorite people in the world.",
  "You bring so much joy into my life.",
  "You are creative in your own beautiful way.",
  "You make memories feel unforgettable.",
  "You are gentle, loving, and genuine.",
  "You have the best energy.",
  "You are fun to be around.",
  "You make me want to be better.",
  "You are special in ways words can barely explain.",
  "You are truly one of a kind.",
  "Because being with you is a gift."
];

const notReasons = [
  "None.",
  "No reasons.",
  "There are no reasons.",
  "Il n'y a pas de raison.",
  "Aucune raison.",
  "0.",
  "PAS VRAI.",
  "YOU'RE AMAZING.",
  "This list is empty for a reason.",
  "Impossible to find one.",
  "Not applicable.",
  "Error 404: reason not found.",
  "Nope.",
  "Still no reason.",
  "Absolutely zero.",
  "Nice try.",
  "This button is broken because there are no reasons.",
  "False question.",
  "Denied.",
  "No evidence found.",
  "The answer is still none.",
  "She is amazing. End of discussion.",
  "Même Google ne trouve rien.",
  "There are literally no reasons.",
  "Final answer: you're amazing ❤️"
];

function showRandomReason() {
  const reasonText = document.getElementById("reason-text");
  const randomIndex = Math.floor(Math.random() * reasons.length);
  reasonText.textContent = reasons[randomIndex];
}

function showRandomNotReason() {
  const notReasonText = document.getElementById("not-reason-text");
  const randomIndex = Math.floor(Math.random() * notReasons.length);
  notReasonText.textContent = notReasons[randomIndex];
}

function openSurprise() {
  document.getElementById("modal").style.display = "flex";
  launchConfetti();
}

function closeSurprise() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeSurprise();
  }
};

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.querySelector(".floating-hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 700);

function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    setTimeout(createHeart, i * 60);
  }
}