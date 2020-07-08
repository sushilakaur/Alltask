console.log("Hello! ");

const nav = document.querySelector(".nav-bar");

console.log(nav);

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 575) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

