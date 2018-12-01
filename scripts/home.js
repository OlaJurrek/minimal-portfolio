//Quotation slideshow

const quotationSlide = document.querySelector(".quotation-slide");
// const quotationFrame = document.querySelector(".quotation-frame");
const quotationDivs = document.querySelectorAll(".quotation-slide div");

let counter = 1;
// const size = quotationFrame.clientWidth;
const size = quotationSlide.clientWidth;

setInterval(quotationSlider, 2000);

function quotationSlider() {
  if (counter < quotationDivs.length - 2) {
    quotationSlide.style.transition = "transform .7s ease-in-out";
    counter++;
    quotationSlide.style.transform = "translateX(" + -size * counter + "px)";
  } else {
    quotationSlide.style.transition = "none";
    counter = 0;
    quotationSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
}

// quotationSlider.addEventListener("transitionend", () => {
//   if (carouselImages[counter].id === "lastClone") {
//     carouselSlide.style.transition = "none";
//     counter = carouselImages.length - 2;
//     carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
//   }
// });

// Team members slideshow

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
