"use strict";

// burger menue icon
const wrapperMenu = document.querySelector(".wrapper-menu");
const navBarMenu = document.querySelector(".top_nav");
const navbarSection = document.querySelector(".navbar");

wrapperMenu.addEventListener("click", function () {
  wrapperMenu.classList.toggle("open");
  navBarMenu.classList.toggle("hidden");
  navbarSection.classList.toggle("background_forNav");
});

// skill dropdown list

const skillsBtn = document.querySelectorAll(".skills_header");
const skillsList = document.querySelectorAll(".skills__list");

for (let i = 0; i < skillsBtn.length; i++) {
  skillsBtn[i].addEventListener("click", function () {
    skillsList[i].classList.toggle("hidden");
  });
}
