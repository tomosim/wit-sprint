const get = require('./get');
const {weatherKey} = require('../config')

const getWeather = (location = 'Manchester', time = Date.now())=>{
    return get(`http://api.apixu.com/v1/current.json?key=${weatherKey}&q=${location}`)
}

module.exports = getWeather;