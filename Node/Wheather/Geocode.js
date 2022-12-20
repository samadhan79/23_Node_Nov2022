const axios = require('axios')
const weather = require('./Wheather')
const Geocode = (city, callback) => {
    // const city = "Surat,Gujarat"
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=725b1290c1344ab4b72341d421e6c994`;
    axios.get(url).then((result) => {
        const data = result.data.results[0].geometry;
        const lat = data.lat
        const lon = data.lng
        weather(lat, lon, (result) => {
            callback(result)
        })


    }).catch((err) => {
        console.log(err);
    })
}
module.exports = Geocode