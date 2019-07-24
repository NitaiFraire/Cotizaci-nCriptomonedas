const api = new API('8981a0c65cd90cb2899f334e4e096fb567b84c149c3258b8f127aac7741ca1b3');
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
        api.obtenerValores(monedaSeleccionada, cryptoSeleccionada)
           .then(data => {

                console.log(data.RAW);
                ui.mostrarResultado(data.RAW, monedaSeleccionada, cryptoSeleccionada);
           });    
    }
});