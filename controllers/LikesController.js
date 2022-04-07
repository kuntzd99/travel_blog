const { Likes } = require('../models/index')

const getLikesByLocation = async (req, res) => {
  try {
    const likes = await Likes.find()
    let locationLikes
    likes.forEach((like) => {
      if (like.location._id == req.params.id) {
        locationLikes = like
      }
    })
    if (locationLikes) {
      return res.status(200).json({ locationLikes })
    }
    return res.status(404).send('Likes for this location do not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateLikes = async (req, res) => {
  try {
    const like = await Likes.findById(req.params.id)
    like.likes = req.body.likes
    like.location = req.body.location
    like.save()
    res.status(200).json({ like })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getLikesByLocation,
  updateLikes
}
