// ========== Typing Animation ==========
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

const phrases = ["Web Developer", "Creative Coder", "Tech Enthusiast"];
let phraseIndex = 0;
let charIndex = 0;
let typing = true;

function type() {
  if (typing) {
    if (charIndex < phrases[phraseIndex].length) {
      typedText.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      typing = false;
      setTimeout(type, 1500);
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 50);
    } else {
      typing = true;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 300);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// ========== Scroll to Top ==========
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ========== Dark Mode Toggle ==========
const toggleBtn = document.getElementById("darkToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

// ========== Project Filtering ==========
function filter(category) {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const match = category === "all" || card.dataset.category === category;
    card.style.display = match ? "block" : "none";
  });
}
