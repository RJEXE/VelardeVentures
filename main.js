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
