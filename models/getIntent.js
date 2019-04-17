const {Wit} = require('node-wit')
const {accessToken} = require('../config.js')

const client = new Wit({
    accessToken
})

const getIntent = (text)=>{
    return client.message(text)
}

module.exports = getIntent;