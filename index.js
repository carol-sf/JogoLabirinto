let labirinto = document.querySelector('.labirinto');
let btnTentarNovamente = document.querySelector('#btnTentarNovamente');

labirinto.addEventListener('mouseout', sair);
btnTentarNovamente.addEventListener('click', tentarNovamente);

function sair() {
    let status = document.querySelector('#status');
    labirinto.style.background = 'red';
    status.style.display = 'block';
}

function tentarNovamente() {
    let status = document.querySelector('#status');
    labirinto.style.background = 'white';
    status.style.display = 'none';
    
}