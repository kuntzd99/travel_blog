const { Schema } = require('mongoose')

const Likes = new Schema(
  {
    likes: { type: Number, required: true },
    location: { type: Schema.Types.ObjectId, ref: 'Location' }
  },
  { timestamps: true }
)

module.exports = Likes
