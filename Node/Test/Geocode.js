const axios= require('axios')
const Geocode = () =>{
    const city = "Surat,Gujarat"
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=725b1290c1344ab4b72341d421e6c994`;
    axios.get(url).then((result)=>{
        console.log(result.data.results[0].geometry)
    }).catch((error)=>console.log(error))
}

Geocode()