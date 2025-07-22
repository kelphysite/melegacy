const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Optional: Close mobile menu when clicking a link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
