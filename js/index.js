// Megamenu Function

const showMegaMenuBtn = document.querySelector(".showMegaMenu");
const megaMenu = document.querySelector(".megamenu");
[showMegaMenuBtn, megaMenu].forEach((el) =>
  el.addEventListener("mouseenter", () => {
    megaMenu.classList.add("show__mega-menu");
  })
);
[showMegaMenuBtn, megaMenu].forEach((el) =>
  el.addEventListener("mouseleave", () => {
    megaMenu.classList.remove("show__mega-menu");
  })
);

// Stars Rating

const personsRating = [...document.querySelectorAll(".person__rating")];
const stars = (person) => {
  let html = ``;
  const goldStars = +person.dataset.star;
  for (let i = 0; i < goldStars; i++) {
    html += `<i class="fa-solid rated fa-star"></i>`;
  }
  for (let i = 0; i < 5 - goldStars; i++) {
    html += `<i class="fa-regular  fa-star"></i>`;
  }

  person.innerHTML = html;
};

personsRating.forEach(stars);

// Skills Observer
const sectionSkills = document.querySelector(".skills");
const move = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target
      .querySelectorAll(".skills__display")
      .forEach((el) => el.classList.add("move"));
    observer.unobserve(sectionSkills);
  }
};
const observer = new IntersectionObserver(move, {
  root: null,
  rootMargin: "-350px",
});

observer.observe(sectionSkills);

//  Timer

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const eventDate = new Date(2022, 8, 31);

const timer = setInterval(() => {
  const currentDate = new Date();
  const timeGap = eventDate - currentDate;
  days.textContent = String(Math.floor(timeGap / 1000 / 60 / 60 / 24)).padStart(
    2,
    "0"
  );
  hours.textContent = String(
    Math.floor((timeGap % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60)
  ).padStart(2, "0");
  minutes.textContent = String(
    Math.floor(
      ((timeGap % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60 -
        +hours.textContent) *
        60
    )
  ).padStart(2, "0");
  seconds.textContent = String(
    Math.floor(
      (((timeGap % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60 -
        +hours.textContent) *
        60 -
        minutes.textContent) *
        60
    )
  ).padStart(2, 0);
}, 1000);

// Scroll Navigation

const navLinks = document.querySelectorAll(".nav__link");
const megaLinks = document.querySelectorAll(".mega__link");
console.log(megaLinks);

[...navLinks, ...megaLinks].forEach((link) => {
  if (link.getAttribute("href") === "#") return;
  const section = document.querySelector(`.${link.getAttribute("href")}`);
  console.log(section);
  link.addEventListener("click", (e) => {
    e.preventDefault();
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});
