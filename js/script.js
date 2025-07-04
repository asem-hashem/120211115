// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
} else {
    scrollTopBtn.classList.remove("show");
}
});

// Get all section elements and nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    // Loop through sections to find which is in view
    sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
    }
    });

    // Remove 'active' from all links, add to the current one
    navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
    }
    });
});

const toggleDark = document.querySelector(".bx-moon");

function setDarkMode(enabled) {
document.body.classList.toggle("dark", enabled);
localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
}

// Load dark mode state on page load
window.addEventListener("DOMContentLoaded", () => {
const darkMode = localStorage.getItem("darkMode");
if (darkMode === "enabled") {
setDarkMode(true);
}
});

// Toggle dark mode on icon click
toggleDark.addEventListener("click", () => {
const isDark = document.body.classList.contains("dark");
setDarkMode(!isDark);
});

// Dark Mode Toggle with Icon Change + LocalStorage
const darkModeToggle = document.getElementById("darkModeToggle");

// Saved mode on load
if (localStorage.getItem("mode") === "dark") {
document.body.classList.add("dark-mode");
darkModeToggle.classList.replace('bx-moon', 'bx-sun');
}

// Toggle dark mode on click
darkModeToggle.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {
darkModeToggle.classList.replace('bx-moon', 'bx-sun');
localStorage.setItem("mode", "dark");
} else {
darkModeToggle.classList.replace('bx-sun', 'bx-moon');
localStorage.setItem("mode", "light");
}
});

// Toggle mobile sidebar
const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeBtn = document.getElementById("closeSidebarBtn");
const sidebar = document.querySelector(".sidebar");

hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

