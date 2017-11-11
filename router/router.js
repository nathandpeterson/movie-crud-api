const express = require('express')
const router = express.Router()
const ctrl = require('../controller/controller.js')

router.get('/', ctrl.home)
router.get('/movies')
router.get('/movies', ctrl.getAllMovies)
router.get('/movies/:id', ctrl.getOneMovie)
router.post('/movies', ctrl.createMovie)
router.put('/movies/:id', ctrl.updateMovie)
router.delete('/movies/:id', ctrl.destroyMovie)

module.exports = router
