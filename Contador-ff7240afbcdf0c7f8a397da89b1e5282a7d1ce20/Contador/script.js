let intervalo;

function contador() {
    let tiempodado = +document.getElementById('segundos').value;
    let tiempoRestante = tiempodado;

    intervalo = setInterval(() => {
        document.getElementById('salida').textContent = tiempoRestante;
        tiempoRestante--;

        if (tiempoRestante < 0) {
            clearInterval(intervalo);
            finalizar();
        }
    }, 1000);
}

function finalizar() {
    document.getElementById('salida').textContent = 'ON';
    let alarma = document.getElementById('alarma');
    alarma.play();
}

function reiniciar() {
    clearInterval(intervalo);
    location.reload();
}
