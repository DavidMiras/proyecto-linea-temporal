'use strict';

const showOnPx = 100;
const backToTOp = document.getElementById('backToTop');
const scrollContainer = () => {
  return document.documentElement || document.body;
};
const sortEventosPorFecha = lista => {
    lista.sort((a, b) => a.date - b.date);
};

const goBackToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

function allBackToTop() {
    backToTopButton.addEventListener("click", goBackToTop);
    document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("rightHidden");    
    } else {
        backToTopButton.classList.add("rightHidden");    
    }
    });
}

// añadir clase, cambiar clase, genérica, custom functions

const changeClass = (element, accion, clase) => { 
  if (accion === 1) {
    element.classList.add(clase);
  } else if (accion === 2) {
    element.classList.remove(clase);
  } else {
    element.setAttribute('class', clase);
  } 
}

// --------------------------------------------------
// getElementById generica, genérica, custom functions

function id( str ){
  return document.getElementById( str );
}

export {showOnPx, backToTOp, scrollContainer, goBackToTop, allBackToTop, sortEventosPorFecha, changeClass};