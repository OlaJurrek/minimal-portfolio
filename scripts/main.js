/* Menu animation */
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  if (menu.className == "hide") {
    menu.className = menu.className.replace("hide", "show");
    hamburger.className += "showMenu";
  } else {
    menu.className = menu.className.replace("show", "hide");
    hamburger.className = hamburger.className.replace("showMenu", "");
  }
});

/* On-scroll animations */
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slideInItems = document.querySelectorAll(".slide-in");

window.addEventListener("scroll", debounce(checkSlide));

function checkSlide(e) {
  slideInItems.forEach(slideInItem => {
    const slideInAt =
      window.scrollY + window.innerHeight - slideInItem.offsetHeight / 2;
    if (slideInAt > slideInItem.offsetTop) {
      slideInItem.classList.add("visible");
    }
  });
}

// Portfolio slideshow
const current = document.querySelector("#current");
const thumbnails = document.querySelectorAll(".thumbnails div img");

thumbnails.forEach(item => item.addEventListener("click", showImg));

function showImg(e) {
  current.src = e.target.src;
}
