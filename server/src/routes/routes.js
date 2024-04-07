const express = require('express')
const promptController = require('../controllers/prompt-controller')

const router = express.Router()

routes.post('api/prompt', promptController.sendText)

module.exports = routes