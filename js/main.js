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

// Get all nav-links
const navLinks = document.querySelectorAll(".nav-link");

// Get the current page URL
const currentPage = window.location.href;

// Loop through nav-links and add active class if the link matches the current page URL
navLinks.forEach((link) => {
  if (link.href === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
