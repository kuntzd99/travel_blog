const { Router } = require('express')
const locationController = require('../controllers/LocationController')
const router = Router()

router.get('/locations', locationController.getAllLocations)

module.exports = router
