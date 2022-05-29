const menuBtn = document.querySelector(".menuBtn");
const menuItems = document.querySelector(".navLinks");
const menuItem = document.querySelectorAll(".navItems");

menuBtn.addEventListener("click", () => {
    toggle();
});


function toggle() {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
}

menuBtn.addEventListener("click", () =>{
    menuItems.classList.toggle("show");
});



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navigation");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}