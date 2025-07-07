const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const memeContainer = document.getElementById('memeContainer');
const memeSound = document.getElementById('memeSound');
const heartContainer = document.getElementById('heartContainer');

let fontSize = 20;

const allMemes = [
  "https://i.redd.it/v0caqchbtn741.jpg",
  "https://i.imgflip.com/4/5z4i.jpg",
  "https://i.kym-cdn.com/entries/icons/original/000/031/015/cover4.jpg",
  "https://i.imgflip.com/30b1gx.jpg",
  "https://i.kym-cdn.com/photos/images/facebook/001/506/947/8d7.jpg",
  "https://media.tenor.com/yheo1GGu3FwAAAAC/rick-roll-rick-ashley.gif",
  "https://media.tenor.com/5KqPYoLPw0gAAAAd/crying-cat-meme.gif"
];

let unusedMemes = [...allMemes];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(unusedMemes);

noBtn.addEventListener('click', () => {
  fontSize += 10;
  yesBtn.style.fontSize = `${fontSize}px`;

  if (unusedMemes.length === 0) {
    alert("All memes used 😭 Just say yes na pls");
    return;
  }

  const memeUrl = unusedMemes.pop();

  const img = document.createElement('img');
  img.src = memeUrl;
  img.className = 'meme-float';
  memeContainer.appendChild(img);

  memeSound.currentTime = 0;
  memeSound.play();

  // create heart effect
  createHeart();
});

yesBtn.addEventListener('click', () => {
  alert("Yay! I love you 😍");
  for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 200);
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 4000);
}
