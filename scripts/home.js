"use strict";

// Team Members Slideshow
const membersDetails = document.querySelectorAll(".member-details");
const membersImages = document.querySelectorAll(".member-image");

const nextArrow = document.querySelector("#next");
const prevArrow = document.querySelector("#prev");

let currentMember = 0;

nextArrow.addEventListener("click", () => {
  if (currentMember < membersDetails.length - 1) {
    hideMember();
    currentMember++;
    showMember();
  } else {
    hideMember();
    currentMember = 0;
    showMember();
  }
});

prevArrow.addEventListener("click", () => {
  if (currentMember > 0) {
    hideMember();
    currentMember--;
    showMember();
  } else {
    hideMember();
    currentMember = membersDetails.length - 1;
    showMember();
  }
});

function showMember() {
  membersImages[currentMember].classList.add("show-member");
  membersDetails[currentMember].classList.add("show-member");
}

function hideMember() {
  membersImages[currentMember].classList.remove("show-member");
  membersDetails[currentMember].classList.remove("show-member");
}

// Hide Label If Start Typing
const form = document.querySelector("form");

form.addEventListener("keyup", hideLabelOnFocus);

function hideLabelOnFocus(e) {
  const key = event.key;
  if (key === "Backspace" || key === "Delete") {
    if (!e.target.value) {
      e.target.previousElementSibling.style.visibility = "visible";
    }
  } else {
    e.target.previousElementSibling.style.visibility = "hidden";
  }
}

// Quotation Slideshow
const quotationSlide = document.querySelector(".quotation-slide");
const quotationDivs = quotationSlide.children;

let counter = 0;

setInterval(quotationSlider, 2500);

function quotationSlider() {
  const size = quotationDivs[0].clientWidth;
  quotationSlide.style.transition = "transform .8s ease-in-out";
  counter++;
  quotationSlide.style.transform = "translateX(" + -size * counter + "px)";
}

quotationSlide.addEventListener("transitionend", () => {
  if (quotationDivs[counter].id === "firstClone") {
    quotationSlide.style.transition = "none";
    counter = 0;
    quotationSlide.style.transform = "translateX(0)";
  }
});
