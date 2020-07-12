const nav = document.querySelector(".nav");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 145) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

