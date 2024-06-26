window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var scrollPosition = window.scrollY;

  // Add 'header-fixed' class when the page is scrolled down
  if (scrollPosition > 0) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
});
