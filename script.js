const hamburguer = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".menu-nav")

hamburguer.addEventListener("click", () =>{
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
})