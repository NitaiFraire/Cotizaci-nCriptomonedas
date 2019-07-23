const ui = new Interfaz();
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) =>{

    e.preventDefault();
    
    // leer moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    // leer la cryptomoneda
    const cryptoSelect = document.querySelector('#criptomoneda');
    const cryptoSeleccionada = cryptoSelect.options[cryptoSelect.selectedIndex].value;

    // comprobar que ambos campos tengan algo seleccionado
    if(monedaSeleccionada === '' || cryptoSeleccionada === ''){

        // alerta de error
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');

    }else{

        // consultar la api
        console.log('bien');
    }
});