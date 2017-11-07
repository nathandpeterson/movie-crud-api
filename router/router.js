const express = require('express')
const router = express.Router()
const ctrl = require('../controller/controller.js')

router.get('/', ctrl.home)
router.get('/movies')
router.get('/movies', ctrl.getAllMovies)
router.get('/movies/:id', ctrl.getOneMovie)
router.get('/actors', ctrl.getAllActors)
router.get('/actors/:id', ctrl.getOneActor)

module.exports = router
