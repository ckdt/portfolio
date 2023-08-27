const title = document.querySelector('.header__label');
const links = document.querySelectorAll('.experiment__link');
const body = document.querySelector('.page__scrapbook');

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    title.innerText = link.getAttribute("data-title");
    link.classList.add('hovered');
    body.classList.add('hovered');
  })

  link.addEventListener("mouseleave", () => {
    title.innerText = "CKDT0023";
    link.classList.remove('hovered');
    body.classList.remove('hovered');
  })
})