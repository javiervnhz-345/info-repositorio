
function promediar(){
    const nota1 = +document.getElementById('nota1').value;
    const nota2 = +document.getElementById('nota2').value;
    const nota3 = +document.getElementById('nota3').value;
    const mostrar = document.getElementById('salida');
    const promedio = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.3);
    mostrar.textContent = promedio;
}

if(promedio >= 6 && promedio <=10){
mostrar.textContent = promedio + 'Pasaste!'
}
else if (promedio >= 1 && promedio < 6){
    mostrar.textContent= promedio + 'Dejaste!'

}
else{
    mostrar.textContent = 'Ingrese sus notas entre 1 a 10';
}