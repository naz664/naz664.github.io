function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => observer.observe(section));

const words = [
  "Android Developer",
  "Tech Enthusiast",
  "Full Stack Developer",
   "Vibe coder",
];

const typingElement = document.getElementById("typing");
let wordIndex = 0;

function showWord() {
  typingElement.style.opacity = 0;

  setTimeout(() => {
    typingElement.textContent = words[wordIndex];
    typingElement.style.opacity = 1;
    wordIndex = (wordIndex + 1) % words.length;
  }, 400);
}

showWord();
setInterval(showWord, 4000);

/* ===============================
   THEME TOGGLE (SYSTEM + MANUAL)
================================ */
const toggle = document.getElementById("themeToggle");

// detect system preference
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// check saved theme first
let savedTheme = localStorage.getItem("theme");

// apply theme
function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
    toggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    document.body.classList.remove("light");
    toggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
}

// priority order:
// 1. saved theme
// 2. system theme
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme(prefersDark ? "dark" : "light");
}

// manual toggle (overrides system)
toggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  const newTheme = isLight ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});
