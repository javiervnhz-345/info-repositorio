function descuento() {
    const cantidad = +document.getElementById('productos').value; 
    const mostrar = document.getElementById('salida'); 
    let descuentoAplicado;


    if (cantidad === 6 || cantidad === 12) {
        descuentoAplicado = 0.15; 
    } 

    else if (cantidad >= 1 && cantidad <= 11) {
        descuentoAplicado = 0.10; 
    } 

    else {
        descuentoAplicado = 0; 
    }
    
    const precioFinal = cantidad - (cantidad * descuentoAplicado);
    
    if (descuentoAplicado > 0) {
        mostrar.textContent = `Aplicaste un ${descuentoAplicado * 100}% de descuento. El precio te queda en ${precioFinal.toFixed(2)}` ;
    } else {
        mostrar.textContent = 'Descuento no aplicado. El precio te queda en ' + cantidad.toFixed(2);
    }
}

function reiniciarPagina() {
    location.reload(); 
}
