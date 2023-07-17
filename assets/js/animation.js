// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// ——————————————————————————————————————————————————
// HOME-PAGE SECRET CODE ANIMATION
// ——————————————————————————————————————————————————

let phrases = [
  "Bienvenue !",
  "Je m'appelle Karen",
  "développeuse web front-end",
  "webdesigner",
  "découvrez mon profil !",
];

const el = document.querySelector(".text-animation");
let fx = new TextScramble(el);
let counter = 0;

const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 600);
  });
  counter = (counter + 1) % phrases.length;
};

let interval = setInterval(next, 20);
const buttonElement = document.querySelector("#secret-code");

const handleSecretClick = (event) => {
  const secretbtn = event.currentTarget;

  if (secretbtn) {
    clearInterval(interval, 3000);
    buttonElement.style.display = "none";

    const TextAnim = () => fx.setText("");
    setTimeout(TextAnim, 7000);
  }
};

const btn = buttonElement.addEventListener("click", handleSecretClick);

// ——————————————————————————————————————————————————
// BACK TO HOME PAGE BUTTON
// ——————————————————————————————————————————————————
let homeButton = document.getElementById("back-home");

// When the user scrolls down 20px from the top of the page, show the button
window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    homeButton.style.display = "block";
  } else {
    homeButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll top + go back to the home menu
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
