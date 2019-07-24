class Interfaz{

    constructor(){

        this.init();
    }

    init(){

        this.construirSelect();
    }

    construirSelect(){
        api.obtenerMonedasApi()
            .then( monedas => {

                // crear select opciones
                const select = document.querySelector('#criptomoneda');

                // iterar los resultados
                for( const [key, value] of Object.entries(monedas.Data)){

                    // añadir el symbol y nombre como opciondes del select
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion)
                }
            });
    }

    mostrarMensaje(mensaje, clases){

        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        // mostrar mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        // eliminar despues de 3s
        setTimeout(() => { document.querySelector('.mensajes div').remove(); }, 3000);
    }

    mostrarResultado(resultado, moneda, crypto){

        // en caso de resultado anteriro ocultar
        const resultadoAnterior = document.querySelector('#resultado > div');

        if(resultadoAnterior){
            resultadoAnterior.remove();
        }

        const datosMoneda = resultado[crypto][moneda];
        
        // recortar digitos de precio
        let precio = datosMoneda.PRICE.toFixed(2),
            porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
            actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX');

        // construir template
        let templateHtml = `
                            <div class="card bg-warning">
                                <div class="card-body text-light">
                                    <h2 class="card-title">Resultado</h2>
                                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $${precio}</p>
                                    <p>Variación último día: %${porcentaje}</p>
                                    <p>Última Actualización: ${actualizado}</p>
                                </div>
                            </div>`;

        this.mostrarOcultarSpinner('block');

        // insertar resultado
        setTimeout(() => {
            
            document.querySelector('#resultado').innerHTML = templateHtml;
            this.mostrarOcultarSpinner('none');

        }, 2500);
    }

    mostrarOcultarSpinner(vista){

        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }


}