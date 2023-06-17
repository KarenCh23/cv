let graphicButton = document.querySelector("#graphic-btn");
let graphicDiv = document.querySelector("#graphic-gallery");

const displayTimeOut = () => {
  setTimeout(displayAllProjects, 1000);
};

const displayAllProjects = () => {
  if (graphicDiv.style.visibility === "hidden") {
    graphicButton.textContent = "Go back to Web projects";
    graphicDiv.style.visibility = "visible";
  } else {
    graphicDiv.style.visibility = "hidden";
    graphicButton.textContent = "See all Web & Graphic projects";
  }
};

// Gallery photo expanded animation //

let gallimages = document.querySelectorAll("#gallery-box figure");
for (i = 0; i < gallimages.length; i++) {
  gallimages[i].addEventListener("click", function () {
    this.classList.toggle("expanded");
    gallimages.classList.toggle("full");
  });
}
