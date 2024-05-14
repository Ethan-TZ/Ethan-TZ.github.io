window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("nav");
  if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
    navbar.style.opacity = "1";
  } else {
    navbar.style.opacity = "0";
  }
}
