let labirintoInicio = document.querySelector('#labirintoInicio');
let labirinto = document.querySelector('.labirinto');
let btnTentarNovamente = document.querySelector('#btnTentarNovamente');
let jogoIniciado = 0;

labirintoInicio.addEventListener('mouseenter', iniciarJogo)
labirinto.addEventListener('mouseout', sair);
btnTentarNovamente.addEventListener('click', tentarNovamente);

function iniciarJogo() {
    jogoIniciado = 1;
}

function sair() {
    if (jogoIniciado == 1) {
        let status = document.querySelector('#status');
        labirinto.style.background = 'red';
        status.style.display = 'block';
    }
}

function tentarNovamente() {
    let status = document.querySelector('#status');
    status.style.display = 'none';
    labirinto.style.background = 'white';
    jogoIniciado = 0;
}