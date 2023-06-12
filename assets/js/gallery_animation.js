let graphicButton = document.querySelector('#graphic-btn')
let webButton = document.querySelector('#web-btn')

const displayTimeOut = () => {

 let timeout = setTimeout(DisplayAllProjects, 1000)

}

const DisplayAllProjects = () => {

    let graphicDiv = document.querySelector("#graphic-gallery");

   if(graphicButton) {

    graphicButton.innerHTML = ""
    graphicButton.textContent = "All last projects"
    graphicDiv.style.visibility = "visible"

   }
 
}

// Gallery photo animation //

let gallimages = document.querySelectorAll("#gallery-box figure");
for(i=0; i<gallimages.length; i++) {
  gallimages[i].addEventListener('click', function(){ 
    this.classList.toggle("expanded"); gallimages.classList.toggle("full") 
}); 
}




