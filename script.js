const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Efek navbar saat halaman di-scroll
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// Mobile navigation
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Tutup menu setelah memilih bagian halaman
document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Animasi elemen saat masuk viewport
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 70, 350)}ms`;
  observer.observe(element);
});

// Tahun footer otomatis
document.getElementById("year").textContent = new Date().getFullYear();
