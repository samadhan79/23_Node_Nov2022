const geocode = require('./Geocode')
const city = "Surat,Gujrat"
geocode(city, (result) => {
    console.log(result.temp, result.city, result.pressure)
})