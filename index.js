var labirinto = document.querySelector('.labirinto');

labirinto.addEventListener('mouseout', sair);

function sair() {
    labirinto.style.background = 'red';
}