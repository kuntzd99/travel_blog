const { Router } = require('express')
const locationController = require('../controllers/LocationController')
const likesController = require('../controllers/LikesController.js')
const commentController = require('../controllers/CommentController')
const router = Router()

router.get('/locations', locationController.getAllLocations)

router.get('/likes/:id', likesController.getLikesByLocation)

router.get('/comments/:id', commentController.getCommentsByLocation)

router.post('/comments', commentController.createComment)

router.put('/likes/:id', likesController.updateLikes)

module.exports = router
