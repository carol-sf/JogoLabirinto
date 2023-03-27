let campo = document.querySelector('#campo');
let emAndamento = 0;
let vencido = 0;



let labirinto = document.querySelector('.labirinto');
let inicio = document.querySelector('#inicio');
let chegada = document.querySelector('#chegada');
let btnStatus = document.querySelector('#btnStatus');
let iniciado = 0;

labirinto.addEventListener('mouseleave', perdeu);
inicio.addEventListener('mouseleave', iniciou);
chegada.addEventListener('mouseenter', venceu);
btnStatus.addEventListener('click', jogar)

function perdeu() {
    if (iniciado == 1) {
        let status = document.querySelector('#status');
        status.style.display = 'block';
    }
}

function iniciou() {
    iniciado = 1;
}

function venceu() {
    if (iniciado == 1) {
        let status = document.querySelector('#status');
        let statusTitulo = document.querySelector('#statusTitulo');

        status.style.display = 'block';
        statusTitulo.innerHTML = 'Você venceu!';
        btnStatus.innerHTML = 'Proxima fase';
        btnStatus.style.background = 'rgb(53, 184, 140)'
    }
}

function jogar() {
    let status = document.querySelector('#status');
    let statusTitulo = document.querySelector('#statusTitulo');
    
    status.style.display = 'block';
    statusTitulo.innerHTML = 'Você perdeu!';
    btnStatus.innerHTML = 'Tentar novamente';
    btnStatus.style.background = 'red'
    iniciado = 0;

    if(btnStatus.innerHTML == 'Tentar novamente') {
        let status = document.querySelector('#status');
        status.style.display = 'none';
    } else {
        console.log('proxima fase');
        let status = document.querySelector('#status');
        status.style.display = 'none';
    }
}