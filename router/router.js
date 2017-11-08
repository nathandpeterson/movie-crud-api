const express = require('express')
const router = express.Router()
const ctrl = require('../controller/controller.js')

router.get('/', ctrl.home)
router.get('/movies')
router.get('/movies', ctrl.getAllMovies)
router.get('/movies/:id', ctrl.getOneMovie)
router.post('/movies', ctrl.createMovie)
router.delete('/movies/:id', ctrl.destroyMovie)
router.get('/actors', ctrl.getAllActors)
router.get('/actors/:id', ctrl.getOneActor)

module.exports = router
