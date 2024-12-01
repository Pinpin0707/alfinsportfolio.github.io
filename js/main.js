/*===== DYNAMIC NAME =====*/
document.addEventListener("DOMContentLoaded", (event) => {
  const messageElement = document.getElementById("dynamic_name");
  const message = ["Alfin Syaghaf Rifai ", "Alfin "];
  let index = 0;
  let charIndex = 0;
  let currentMessage = "";
  let isDeleting = false;

  function typeWriterEffect() {
    if (isDeleting) {
      currentMessage = message[index].substring(0, charIndex--);
    } else {
      currentMessage = message[index].substring(0, charIndex++);
    }

    messageElement.textContent = currentMessage;

    if (!isDeleting && charIndex === message[index].length) {
      isDeleting = true;
      setTimeout(typeWriterEffect, 15000); //in milliseconds 1000 = 1
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % message.length;
      setTimeout(typeWriterEffect, 500);
    } else {
      setTimeout(typeWriterEffect, isDeleting ? 150 : 150);
    }
  }

  typeWriterEffect();
});

/*===== DYNAMIC HELLO WORD =====*/
document.addEventListener("DOMContentLoaded", (event) => {
  const messageElement = document.getElementById("dynamic_message");
  const message = [
    "Hai ",
    "Halo ",
    "Hola ",
    "こんにちは ",
    "안녕하세요 ",
    "您好 ",
    "Bonjour ",
    "Ciao ",
    "Hoi ",
    "Aloha ",
    "مرحباً ",
    "Привет ",
  ];
  let index = 0;
  let charIndex = 0;
  let currentMessage = "";
  let isDeleting = false;

  function typeWriterEffect() {
    if (isDeleting) {
      currentMessage = message[index].substring(0, charIndex--);
    } else {
      currentMessage = message[index].substring(0, charIndex++);
    }

    messageElement.textContent = currentMessage;

    if (!isDeleting && charIndex === message[index].length) {
      isDeleting = true;
      setTimeout(typeWriterEffect, 5000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % message.length;
      setTimeout(typeWriterEffect, 500);
    } else {
      setTimeout(typeWriterEffect, isDeleting ? 75 : 150);
    }
  }

  typeWriterEffect();
});

/*===== MOBILE MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When nav__link got click, remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-, .contact__text_top, .experience-container", {
  interval: 200,
});
sr.reveal(".experience-box, .contact__social", { delay: 300 });
sr.reveal(".experience-heading, .contact__text_bottom", { delay: 400 });
sr.reveal(".experience-value", { delay: 500 });
sr.reveal(".experience-date", { delay: 600 });
sr.reveal(".skills__data, .work__img", { interval: 200 });
