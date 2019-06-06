const axios = require('axios');

const getLugarLatLong = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': '57d05f6e9amshf03dc9ef99b9ebfp100aa4jsnb00da0ae3d33' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para la dirección ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLong
}