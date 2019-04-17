const {getIntent, getWeather} = require('../models')


const interpreter = (req,res,next)=>{
    const intents={
        getWeather
    }
    const {text} = req.body;
    getIntent(text).then(data => {
        return intents[data.entities.intent[0].value]();
    })
    .then(console.log)
    .catch(console.log)
}

module.exports = interpreter;