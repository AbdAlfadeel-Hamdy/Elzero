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
