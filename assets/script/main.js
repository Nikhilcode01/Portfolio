let nav = document.querySelector("nav");

//let scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = function () {
  let scrol = window.scrollY;
  if (scrol < 10) {
    nav.classList.remove("sticky");
  } else {
    nav.classList.add("sticky");
  }
};

// Side NavIgation Menu JS Code

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
};

cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
};

// Side Navigation Bar Close While We Click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
  });
}


// Pop Up Window scripting

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.getElementById("boxes");
  const popupBox = document.getElementById("PopupBox");
  const closeBtn = document.getElementById("closeBtn");
  const previewBtnLink = document.getElementById("previewBtnLink");
  const githubBtnLink = document.getElementById("githubBtnLink");

  boxes.addEventListener("click", function (event) {
    const card = event.target.closest(".pro-box");
    if (!card) return;       // If the click is not a card then ignore it.

    const projectName = card.querySelector(".card-heading").innerText;
    const projectContent = `Hello I'm ${projectName}. If you want to see me then please click on 'Preview' or you can also visit github Repositorie..`;

    document.getElementById("PopupHeading").innerText = projectName;
    document.getElementById("popupBody").innerText = projectContent;

    let projectLink;
    let githunLink;
    switch (card.id) {
      case "P1":
        projectLink = "";
        githunLink = "https://github.com/Nikhilcode01/Chating-App";
        break;

      case "P2":
        projectLink = "https://nikhilcode01-todolist.netlify.app";
        githunLink = "https://github.com/Nikhilcode01/To-Do-App";
        break;

      case "P3":
        projectLink = "";
        githunLink = "https://github.com/Nikhilcode01/Weather-App";
        break;

      case "P4":
        projectLink = "";
        githunLink = "https://github.com/Nikhilcode01/Ludo-Game";
        break;

      case "P5":
        projectLink = "";
        githunLink = "https://github.com/Nikhilcode01/Dictionary-App";
        break;

      case "P6":
        projectLink = "";
        githunLink = "https://github.com/Nikhilcode01/Netflix-Clone";
        break;

      case "P7":
        projectLink = "https://generat-my-password.netlify.app";
        githunLink = "https://github.com/Nikhilcode01/Password-Generator";
        break;

      case "P8":
        projectLink = "https://comments-list.netlify.app";
        githunLink = "https://github.com/Nikhilcode01/Comments-list";
        break;

      case "P9":
        projectLink = "https://full-functional-calculator.netlify.app";
        githunLink = "https://github.com/Nikhilcode01/Calculator";
        break;

      default:
        projectLink = "#";
        githunLink = "#";
    }

    previewBtnLink.setAttribute("href", projectLink);
    githubBtnLink.setAttribute("href", githunLink);

    popupBox.classList.add("show");

  });

  closeBtn.addEventListener("click", function () {
    popupBox.classList.remove("show");
  });

});

