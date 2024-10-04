function dado(){
    let numero = document.getElementById('num').value;
    let salida = document.getElementById('output');
    let random = Math.floor(Math.random() * numero) + 1;   //para examen: poner limites de numeros, tipo mayor que 5 y menor q 10 
    salida.textContent = random;
}