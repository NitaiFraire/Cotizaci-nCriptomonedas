class Interfaz{

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