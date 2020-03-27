// Overlay menu
toggle = document.getElementById("menu-toggle");

function overlay() {
  const el_overlay = document.getElementById("overlay");
  const el_header = document.querySelector(".header");
  const allSiblingOfHeader = document.querySelectorAll(".header ~ *");
  const links = document.querySelectorAll(".nav-top__link");
  if (toggle.checked && !links[0].classList.value.includes("responsive-nav")) {
    el_overlay.classList = "overlay";
    el_header.classList += " header-change";
    links.forEach(link => (link.classList += " responsive-nav"));
    for (i = 0; i < allSiblingOfHeader.length - 2; i++) {
      allSiblingOfHeader[i].classList += " display-none";
    }
  } else {
    el_overlay.className = "";
    el_header.classList.remove("header-change");
    links.forEach(link => link.classList.remove("responsive-nav"));
    for (i = 0; i < allSiblingOfHeader.length - 2; i++) {
      allSiblingOfHeader[i].classList.remove("display-none");
    }
  }
}

function load() {
  toggle.addEventListener("click", overlay, false);
  // Scrolling event
  document.addEventListener("scroll", () => {
    appearAllElem();
    arrowUpAppear();
  });
}

// DOM load
document.addEventListener("DOMContentLoaded", load, false);

// Webpage animation with scroll
function appearAllElem() {
  const html = document.getElementsByTagName("html")[0];
  const elementsAppear = document.getElementsByClassName("appear");
  let topViewport = html.scrollTop;
  let innerHeight = window.innerHeight;
  for (i = 0; i < elementsAppear.length; i++) {
    let topElemAppear = elementsAppear[i].offsetTop;
    if (topViewport > topElemAppear - innerHeight + 100) {
      elementsAppear[i].style.opacity = 1;
    }
  }
}

// Determine when appear arrow-up
const arrowUp = document.querySelector(".up");

function arrowUpAppear() {
  let endHome = document.querySelector(".hero").getBoundingClientRect().bottom;
  let scrollY = window.scrollY;

  if (scrollY > endHome) {
    arrowUp.classList.remove("display-none");
  } else {
    if (arrowUp.classList.toString().search("display-none") == -1) {
      arrowUp.classList += " display-none";
    }
  }
}

// Go up
function goUp() {
  let distanceY = window.scrollY;
  document.querySelector("html").scrollBy({
    top: -distanceY,
    left: 0,
    behavior: "smooth"
  });
}

arrowUp.addEventListener("click", goUp);

scrollTo();

function scrollTo() {
  const links = document.querySelectorAll(".scroll");
  links.forEach(link => link.addEventListener("click", scrollAnchors));
}

function scrollAnchors(event) {
  event.preventDefault();
  const targetID = this.getAttribute("href");
  const targetElem = document.querySelector(targetID);
  const targetDistanceToTop = targetElem.getBoundingClientRect().top;
  window.scrollBy({
    top: targetDistanceToTop - 32,
    left: 0,
    behavior: "smooth"
  });
}
overlayRemove();

function overlayRemove() {
  const links = document.querySelectorAll(".responsive-nav");
  links.forEach(link => link.addEventListener("click", yu));
}

function yu() {
  console.log("hola");
}
