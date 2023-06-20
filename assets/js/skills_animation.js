let skillTitle = document.querySelector("#skill-title");

let prefix = "I work with ";
let skills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Typescript",
  "PHP & MySQL",
].map((s) => `${s}.`);
const delay = 2;
const step = 1;
const tail = 5;
const timeout = 75;

const colors = [
  "lightSeaGreen",
  "paleGreen",
  "limeGreen",
  "lightSkyBlue",
  "blue",
  "mediumBlue",
  "azur",
  "yellow",
  "cyan",
  "aqua",
  "blueViolet",
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
const getRandomChar = () => {
  return String.fromCharCode(Math.random() * (127 - 33) + 33);
};
const getRandomColoredString = (n) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < n; i++) {
    const char = document.createElement("span");
    char.textContent = getRandomChar();
    char.style.color = getRandomColor();
    fragment.appendChild(char);
  }
  return fragment;
};

const $ = {
  text: "",
  prefixP: -tail,
  skillI: 0,
  skillP: 0,
  direction: "forward",
  delay,
  step,
};

const render = () => {
  const skill = skills[$.skillI];

  if ($.step) {
    $.step--;
  } else {
    $.step = step;
    if ($.prefixP < prefix.length) {
      if ($.prefixP >= 0) {
        $.text += prefix[$.prefixP];
      }
      $.prefixP++;
    } else {
      if ($.direction === "forward") {
        if ($.skillP < skill.length) {
          $.text += skill[$.skillP];
          $.skillP++;
        } else {
          if ($.delay) {
            $.delay--;
          } else {
            $.direction = "backward";
            $.delay = delay;
          }
        }
      } else {
        if ($.skillP > 0) {
          $.text = $.text.slice(0, -1);
          $.skillP--;
        } else {
          $.skillI = ($.skillI + 1) % skills.length;
          $.direction = "forward";
        }
      }
    }
  }

  skillTitle.textContent = $.text;

  skillTitle.appendChild(
    getRandomColoredString(
      $.prefixP < prefix.length
        ? Math.min(tail, tail + $.prefixP)
        : Math.min(tail, skill.length - $.skillP)
    )
  );
  setTimeout(render, timeout);
};
setTimeout(render, 500);

// Icon Slide Animation //
let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("fade");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
