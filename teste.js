let campo = document.querySelector('#campo');
let emAndamento = 0;
let vencido = 0;



let labirinto = document.querySelector('.labirinto');
let inicio = document.querySelector('#inicio'); 
let chegada = document.querySelector('#chegada');
let iniciado = 0;
let jogando = 0;

labirinto.addEventListener('mouseleave', perdeu);
inicio.addEventListener('mouseleave', iniciou);
chegada.addEventListener('mouseenter', venceu);

function perdeu() {
    if(iniciado == 1) {
        console.log('perdeu');
        iniciado = 0;
    } 
}

function iniciou() {
    iniciado = 1;
}

function venceu() {
    if(iniciado == 1) {
        console.log('venceu!');
    }
}