const { Router } = require('express')
const locationController = require('../controllers/LocationController')
const likesController = require('../controllers/LikesController.js')
const router = Router()

router.get('/locations', locationController.getAllLocations)

router.get('/likes/:id', likesController.getLikesByLocation)

module.exports = router
