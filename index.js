let inicio = document.querySelector('#inicio');
let labirinto = document.querySelector('.labirinto');
let chegada = document.querySelector('#chegada');
let btnTentarNovamente = document.querySelector('#btnTentarNovamente');
let iniciado = 0;
let perdido = 0;
let vencido = 0;

labirinto.addEventListener('mouseout', perdeu);
// inicio.addEventListener('mouseenter', iniciou);
// chegada.addEventListener('mouseenter', venceu);
btnTentarNovamente.addEventListener('click', tentarNovamente);

function perdeu() {
    console.log('você perdeu!');
}


// function iniciou() {
//     iniciado = 1;
//     perdido = 0;
//     vencido = 0;
// }

// function perdeu() {
//     perdido = 1;
//     // iniciado = 0;
//     // vencido = 0;
//     console.log('perdido' + iniciado + perdido + vencido);

//     jogo();
// }

// function venceu() {
//     vencido = 1;
//     // perdido = 0;
//     // iniciado = 0;
//     console.log('vencido:' + iniciado + perdido + vencido);

//     jogo();
// }

// function jogo() {
//     if (iniciado == 1 && vencido == 1) {
//         console.log("jogo vencido");
//     }
//     if (iniciado == 1 && perdido == 1) {
//         console.log("jogo perdido");
//     }
// }

// function sair() {
//     // if (chegada.addEventListener('mouseenter', finalizarJogo)) {
//     //     console.log('teste');
//     // } else 
//     if (jogoIniciado == 1) {
// let status = document.querySelector('#status');
// labirinto.style.background = 'red';
// status.style.display = 'block';
//     }
// }

function tentarNovamente() {
    let status = document.querySelector('#status');
    status.style.display = 'none';
    labirinto.style.background = 'white';
    iniciado = 0;
    perdido = 0;
    console.log('tentar novamente' + iniciado + perdido + vencido);
}