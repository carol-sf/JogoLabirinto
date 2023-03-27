let labirinto = document.querySelector('.labirinto');
let inicio = document.querySelector('#inicio');
let chegada = document.querySelector('#chegada');
let btnStatus = document.querySelector('#btnStatus');
let iniciado = 0;
let tentarNovamente = 1;
let fase = 1;

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
        btnStatus.style.background = 'rgb(53, 184, 140)';
        tentarNovamente = 0;
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

    if(tentarNovamente == 1) {
        let status = document.querySelector('#status');
        status.style.display = 'none';
    } else {
        let tituloFase = document.querySelector('#tituloFase');

        status.style.display = 'none';
        fase++;
        tituloFase.innerHTML = `Fase ${fase}`;
        tentarNovamente = 1;
    }
}