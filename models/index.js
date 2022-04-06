const mongoose = require('mongoose')
const LocationSchema = require('./Location')
const CommentSchema = require('./Comment')
const LikesSchema = require('./Likes')

const Location = mongoose.model('Location', LocationSchema)
const Comment = mongoose.model('Comment', CommentSchema)
const Likes = mongoose.model('Likes', LikesSchema)

module.exports = {
  Location,
  Comment,
  Likes
}
