const apiRouter = require('express').Router();
const interpreter = require('../controllers')

apiRouter.post('/', interpreter)

module.exports = apiRouter;