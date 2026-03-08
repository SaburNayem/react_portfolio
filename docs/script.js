const lampToggle = document.getElementById("lampToggle");
const lightCone = document.getElementById("lightCone");
const contentWrap = document.getElementById("contentWrap");
const room = lampToggle.closest(".room");
const themeToggle = document.getElementById("themeToggle");
const cursorGlow = document.getElementById("cursorGlow");

let isLampOn = false;

lampToggle.addEventListener("click", () => {
  isLampOn = !isLampOn;
  room.classList.toggle("lit", isLampOn);
  contentWrap.classList.toggle("hidden", !isLampOn);
  if (isLampOn) {
    setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("show"));
    }, 120);
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.remove("show"));
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const typedText = document.getElementById("typedText");
const words = [
  "Developer. Designer. Problem Solver.",
  "I build modern web and mobile experiences.",
  "Fast, scalable, and accessible by default.",
];

let wordIndex = 0;
setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  typedText.style.opacity = "0";
  setTimeout(() => {
    typedText.textContent = words[wordIndex];
    typedText.style.opacity = "1";
  }, 220);
}, 3000);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && isLampOn) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelectorAll(".tilt").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
  });
});

window.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
  if (!isLampOn) {
    lightCone.style.transform = `translateX(-50%) rotate(${(e.clientX / window.innerWidth - 0.5) * 6}deg)`;
  }
});
