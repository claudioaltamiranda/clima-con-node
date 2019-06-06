const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLong(argv.direccion)
//     .then(res => {
//     });

// clima.getClima(res.lat, res.lng)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(dir) => {

    try {

        const data = await lugar.getLugarLatLong(dir);
        const temp = await clima.getClima(data.lat, data.lng);

        return `El clima de ${data.direccion}, es de ${temp} grados centígrados`;

    } catch (error) {
        return `No se pudo determinar el clima de ${dir}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)