function suma() {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    const display = document.getElementById('salida');
    display.textContent = num1 + num2;
}

function resta() {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    const display = document.getElementById('salida');
    display.textContent = num1 - num2;
}

function multiplicacion() {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    const display = document.getElementById('salida');
    display.textContent = num1 * num2;
}

function division() {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    const display = document.getElementById('salida');

    if (num2 !== 0) {
        display.textContent = num1 / num2;
    } 
}

function raizcuadrada() {
    const num1 = +document.getElementById('num1').value;
    const display = document.getElementById('salida');

    if (num1 >= 0) {
        display.textContent = Math.sqrt(num1);
    } 
}

function potenciacion() {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    const display = document.getElementById('salida');
    display.textContent = Math.pow(num1, num2);
}

function borrar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('salida').textContent = '';
}
