const axios = require('axios');

getClima = async(lat, lng)=>{
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=98433a138d3eab85b2c9b7bd421f56c7`);

    //console.log(resp);
    let temperatura = resp.data.main;

    return temperatura.temp;
};




module.exports={
    getClima
};