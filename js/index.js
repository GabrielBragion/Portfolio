//Scroll Suave
const linksInternos = document.querySelectorAll(".intro-menu a[href^='#']");

function scrollToSection(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const topoDoElemento = section.offsetTop;

  window.scrollTo({
    top: topoDoElemento,
    behavior: "smooth",
  });
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

//Efeito no Mouse

const mouseEffect = document.querySelector(".mouse-effect");

function handleEffect(e) {
  mouseEffect.style.top = `${e.pageY}px`;
  mouseEffect.style.left = `${e.pageX}px`;
}

window.addEventListener("mousemove", handleEffect);

//Seleciona menu

const introLinks = document.querySelectorAll(".intro-link")
introLinks[0].classList.add("active")

function handleMenu(e) {
  let scrollY = window.scrollY + 20;
  const section = document.querySelectorAll("section.coluna-2");

  if (scrollY < section[1].offsetTop) {
    introLinks.forEach(item => item.classList.remove("active"))
    introLinks[0].classList.add("active")
  } else if (
    (scrollY > section[1].offsetTop) &
    (scrollY < section[2].offsetTop)
  ) {
    introLinks.forEach(item => item.classList.remove("active"))
    introLinks[1].classList.add("active")
  } else if (scrollY > section[2].offsetTop){
    introLinks.forEach(item => item.classList.remove("active"))
    introLinks[2].classList.add("active")
  } 
}

window.addEventListener("scroll", handleMenu);
