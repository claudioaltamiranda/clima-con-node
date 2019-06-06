const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0c29a0897c31d0ac4add2d3268aa1fbf&units=metric`);
    //                                    api.openweathermap.org/data/2.5/weather?lat=        &lon=        &appid=0c29a0897c31d0ac4add2d3268aa1fbf&units=metric

    return resp.data.main.temp;
}

module.exports = {
    getClima,
}