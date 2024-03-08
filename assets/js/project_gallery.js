var modalInfo = {
  1: {
    title: "QualiExtra",
    info: "Application de gestion hôtelière | Next.Js (React) & Node.Js (back) | Intégration de maquettes (Figma)",
    link: "https://github.com/Qualiextra",
    github: "#",
  },
  2: {
    title: "Nearby",
    info: "Site vitrine de producteurs régionaux | React & Symfony",
    link: "https://github.com/KarenCh23/Nearby",
    github: "#",
  },
  3: {
    title: "Jardins de Khiron",
    info: "Site e-commerce réalisé pour un domaine / jardin pédagogique |  Html,Css & JS",
    link: "https://dribbble.com/shots/23775593-Jardins-de-Khiron",
    github: "#",
  },
  4: {
    title: "Couleurs d'Aurore",
    info: "Site vitrine pour une productrice florale | Wordpress",
    link: "https://dribbble.com/shots/23775254-Couleurs-d-Aurore",
    github: "#",
  },
  5: {
    title: "Le Scarabée",
    info: "Création de contenus digitaux | Création de l'identité graphique",
    link: "https://dribbble.com/shots/23739652-Le-Scarabee",
    github: "#",
  },
  6: {
    title: "Artaban",
    info: "Création de contenus web | Gestion du site e-commerce",
    link: "https://dribbble.com/shots/23738286-Artaban-Web-Design",
    github: "#",
  },
};

// Get the modal + modal details div
let modal = document.getElementById("preview");
let modalDetails = document.getElementById("details");
let linkBtn = document.getElementById("live");

// button that opens the modal
let projectBtn = document.getElementsByClassName("project-button");

// button that closes the modal
let closeBtn = document.getElementsByClassName("modal-close")[0];

// open modal
for (let i = 0; i < projectBtn.length; i++) {
  projectBtn[i].addEventListener("click", function () {
    let project = projectBtn[i].parentElement;
    openModal(project);
    if (window.scrollY) {
      window.scroll(0, 0); // reset the scroll position to the top 
    }
  });
}

function openModal(project) {
  let id = project.id;
  let img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.visibility = "visible";
  modalDetails.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img) {
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;

  document.getElementById("live").onclick = function () {
    window.open(modalInfo[id].link, "_blank");
  };

  if (modalInfo[id].link === "") {
    document.getElementById("live").style.display = "none";
  }
}

// close the modal //
closeBtn.onclick = function () {
  modal.style.visibility = "hidden";
  modalDetails.style.display = "none";
  linkBtn.style.display = "block";
};

modal.onclick = function () {
  modal.style.visibility = "hidden";
  modalDetails.style.display = "none";
  linkBtn.style.display = "block";
};



