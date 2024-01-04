const emojis = [
  "🐶",
  "🐶",
  "🙀",
  "🙀",
  "🐵",
  "🐵",
  "🦝",
  "🦝",
  "🦊",
  "🦊",
  "🦁",
  "🦁",
  "🐮",
  "🐮",
  "🐯",
  "🐯",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("cardMatch");
    openCards[1].classList.add("cardMatch");
  } else {
    openCards[0].classList.remove("cardOpen");
    openCards[1].classList.remove("cardOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".cardMatch").length === emojis.length) {
    alert("Você ganhou!");
  }
}

function handleClick(e) {

  if (this.classList.contains("cardOpen")) return;

  if (openCards.length < 2) {
    this.classList.add("cardOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }

  console.log(openCards);
}

for (let i = 0; i < emojis.length; i++) {
  let card = document.createElement("div");
  card.className = "item";
  card.innerHTML = shuffleEmojis[i];
  card.onclick = handleClick;

  document.querySelector(".board").appendChild(card);
}
