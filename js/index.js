const showMegaMenuBtn = document.querySelector(".show__mega-menu");
const megaMenu = document.querySelector(".mega__menu");
showMegaMenuBtn.addEventListener("mouseenter", () => {
  megaMenu.classList.add("show__mega-menu");
});
showMegaMenuBtn.addEventListener("mouseleave", () => {
  megaMenu.classList.remove("show__mega-menu");
});
megaMenu.addEventListener("mouseenter", () => {
  megaMenu.classList.add("show__mega-menu");
});
megaMenu.addEventListener("mouseleave", () => {
  megaMenu.classList.remove("show__mega-menu");
});

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
