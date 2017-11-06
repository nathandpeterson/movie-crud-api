const express = require('express')
const router = express.Router()
const ctrl = require('../controller/controller.js')

router.get('/', ctrl.home)
router.get('/movies', ctrl.getAllMovies)
router.get('/actors', ctrl.getAllActors)

module.exports = router
