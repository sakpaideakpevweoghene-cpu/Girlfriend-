let current = 1;
const total = 8;

function nextPage() {
  document.getElementById(`p${current}`).classList.remove("show");
  current++;
  document.getElementById(`p${current}`).classList.add("show");
}

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const confirmYes = document.getElementById("confirmYes");
const hearts = document.getElementById("hearts");

// Yes → serious yes
yesBtn.addEventListener("click", () => {
  document.getElementById("p6").classList.remove("show");
  document.getElementById("p7").classList.add("show");
});

// Final yes → hearts
confirmYes.addEventListener("click", () => {
  document.getElementById("p7").classList.remove("show");
  document.getElementById("p8").classList.add("show");

  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 100);
  }
});

// No button dodge
noBtn.addEventListener("mouseenter", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 200 + "px";
  noBtn.style.left = Math.random() * 200 + "px";
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "%";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
}