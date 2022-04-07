const { Comment } = require('../models/index')

const getCommentsByLocation = async (req, res) => {
  try {
    const comments = await Comment.find()
    let locationComments = []
    comments.forEach((comment) => {
      if (comment.location._id == req.params.id) {
        locationComments.push(comment)
      }
    })
    if (locationComments) {
      return res.status(200).json({ locationComments })
    }
    return res.status(404).send('Comments for this location do not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({ comment })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getCommentsByLocation,
  createComment
}
