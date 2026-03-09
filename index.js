const hamburguesa_menu = document.querySelector(".hamburguesa-menu");
const navegacion = document.querySelector(".navegacion");

hamburguesa_menu.addEventListener("click", () => {
  navegacion.classList.toggle("mostrar");
  hamburguesa_menu.classList.toggle("girar");
});

const btn_imagen_anterior = document.getElementById("btn_anterior_img");
const btn_imagen_siguiente = document.getElementById("btn_siguiente_img");
const galeria_equipo = document.querySelector(".galeria_equipo");

btn_imagen_anterior.addEventListener("click", () => {
  galeria_equipo.scrollLeft -= galeria_equipo.clientWidth;
});

btn_imagen_siguiente.addEventListener("click", () => {
  galeria_equipo.scrollLeft += galeria_equipo.clientWidth;
});

const galeria_proyectos = document.querySelectorAll(".galeria_proyectos");

function cambiar_imagen() {
  galeria_proyectos.forEach((galeria) => {
    
    if (galeria.scrollLeft + galeria.clientWidth >= galeria.scrollWidth) {
      galeria.scrollLeft = 0;
    } else {
      galeria.scrollLeft += galeria.clientWidth;
    }
  });
}

const titulos_card_proyectos = document.querySelectorAll(".titulos_card")
let intervalo = setInterval(cambiar_imagen, 4000);
titulos_card_proyectos.forEach((titulo_card) => {
    titulo_card.addEventListener("mouseenter", () => {clearInterval(intervalo)})
    titulo_card.addEventListener("mouseleave", () => {intervalo = setInterval(cambiar_imagen, 4000)})
})