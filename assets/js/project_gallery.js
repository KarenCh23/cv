var modalInfo = {
  1: {
    title: "QualiExtra",
    info: "Application de gestion hôtelière | Next.Js (React) & Node.Js (back)",
    link: "https://github.com/Qualiextra/quali-front",
    github: "#",
  },
  2: {
    title: "Nearby",
    info: "Site vitrine de producteurs régionaux | React & Symfony",
    link: "https://projet-nearby-front.vercel.app/",
    github: "#",
  },
  3: {
    title: "Jardins de Khiron",
    info: "Thème réalisé pour un domaine / jardin pédagogique |  Html,Css & JS",
    link: "",
    github: "#",
  },
  4: {
    title: "Couleurs d'Aurore",
    info: "Site vitrine pour une productrice florale | Wordpress",
    link: "",
    github: "#",
  },
  5: {
    title: "Le Scarabée",
    info: "Création de contenus digitaux | Création de l'identité graphique",
    link: "",
    github: "#",
  },
  6: {
    title: "Artaban",
    info: "Réalisation de contenu web | Gestion du site e-commerce",
    link: "",
    github: "#",
  },
};

// Get the modal
let modal = document.getElementById("preview");


// button that opens the modal
let projectBtn = document.getElementsByClassName("project-button");

// button that closes the modal
let closeBtn = document.getElementsByClassName("modal-close")[0];

// open modal
for (let i = 0; i < projectBtn.length; i++) {
  projectBtn[i].addEventListener("click", function () {
    let project = projectBtn[i].parentElement;
    openModal(project);
  });
}

function openModal(project) {
  let id = project.id;
  let img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.visibility = "visible";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img) {
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;

  if (modalInfo[id].link == "") {
    document.getElementById("live").style.display = "none";
  } else if (modalInfo[id].link !== "") {
    document.getElementById("live").onclick = function () {
      window.open(modalInfo[id].link, "_blank");
    };
  }
}

// close the modal //
closeBtn.onclick = function () {
  modal.style.visibility = "hidden";
};

modal.onclick = function () {
    modal.style.visibility = "hidden";
}