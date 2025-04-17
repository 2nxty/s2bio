const phrases = [
  "curate your presence",
  "your bio, reimagined",
  "customizable pages",
  "a private bio service",
  "a better link in bio"
];

let i = 0, j = 0, current = [], isDeleting = false, isEnd = false;

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

function loop() {
  isEnd = false;

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      current.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j > 0) {
      current.pop();
      j--;
    }

    typedText.textContent = current.join('');

    if (!isDeleting && j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      current = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  const speed = isEnd ? 1500 : isDeleting ? 50 : 120;
  setTimeout(loop, speed);
}

document.addEventListener("DOMContentLoaded", loop);
