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

                for( const [key, value] of  Object.entries(monedas.Data)){

                    console.log(key);
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
}