class API{

    constructor(apikey){

        this.apikey = apikey;
    }

    // obtener todas las monedas
    async obtenerMonedasApi(){

        const url = `https://min-api.cryptocompare.com/data/all/coinlist?apikey=${this.apikey}`;

        // fetch a la api
        const obtenerMonedas = await fetch(url);

        // respuesta en json
        const monedas = await obtenerMonedas.json();

        return monedas;
    }
}