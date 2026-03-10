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
const card_servicio = document.querySelectorAll(".card-servicio");

const span_proyectos_face = document.querySelectorAll(".card_face span");
const card_face = document.querySelectorAll(".card_face");

const card_back = document.querySelectorAll(".card_back");
const span_proyectos_back = document.querySelectorAll(".card_back span");
const titulo_proyectos_back = document.querySelectorAll(".card_back h2");

let index_proyecto = 1;

function cambiar_imagen() {
  galeria_proyectos.forEach((galeria) => {
    if (galeria.scrollLeft + galeria.clientWidth >= galeria.scrollWidth) {
      galeria.scrollLeft = 0;
      index_proyecto = 1;
    } else {
      galeria.scrollLeft += galeria.clientWidth;
      index_proyecto += 1;
    }
  });
}

span_proyectos_face.forEach((span, index) => {
  span.addEventListener("click", () => {
    card_servicio[index].classList.toggle("flip");
    clearInterval(intervalo);

    if (index_proyecto == 1) {
      card_back[index].style.backgroundImage =
        "url('imagenes/imagenes-proyectos-comerciales/proyecto-1.png";
      titulo_proyectos_back[index].textContent = "CONSULTORIO";
    } else if (index_proyecto == 4) {
      card_back[index].style.backgroundImage =
        "url('imagenes/imagenes-proyectos-comerciales/proyecto-2.png";
      titulo_proyectos_back[index].textContent = "CONSULTORIO";
    } else if (index_proyecto == 7) {
      card_back[index].style.backgroundImage =
        "url('imagenes/imagenes-proyectos-comerciales/proyecto-3.png";
      titulo_proyectos_back[index].textContent = "CONSULTORIO";
    } else if (index_proyecto == 10) {
      card_back[index].style.backgroundImage =
        "url('imagenes/imagenes-proyectos-comerciales/proyecto-4.png";
      titulo_proyectos_back[index].textContent = "CONSULTORIO";
    }
  });
});

span_proyectos_back.forEach((span, index) => {
  span.addEventListener("click", () => {
    card_servicio[index].classList.toggle("flip");
    clearInterval(intervalo);
  });
});

const titulos_card_proyectos = document.querySelectorAll(".titulos_card");
let intervalo = setInterval(cambiar_imagen, 4000);
titulos_card_proyectos.forEach((titulo_card) => {
  titulo_card.addEventListener("mouseenter", () => {
    clearInterval(intervalo);
  });
  titulo_card.addEventListener("mouseleave", () => {
    intervalo = setInterval(cambiar_imagen, 4000);
  });
});
