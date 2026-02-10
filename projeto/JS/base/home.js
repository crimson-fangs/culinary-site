
let indiceAtual = 1;
mostrarSlide(indiceAtual);

function mudarSlide(n) {
  mostrarSlide(indiceAtual += n);
}

function slideAtual(n) {
  mostrarSlide(indiceAtual = n);
}

function mostrarSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let pontos = document.getElementsByClassName("ponto");
  
  if (n > slides.length) {indiceAtual = 1}    
  if (n < 1) {indiceAtual = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  for (i = 0; i < pontos.length; i++) {
    pontos[i].className = pontos[i].className.replace(" ativo", "");
  }
  
  slides[indiceAtual-1].style.display = "block";  
  pontos[indiceAtual-1].className += " ativo";
}

setInterval(function() {
    mudarSlide(1);
}, 5000);
  
