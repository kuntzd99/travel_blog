const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    username: { type: String, required: true },
    comment: { type: String, required: true },
    location: { type: Schema.Types.ObjectId, ref: 'Location' }
  },
  { timestamps: true }
)

module.exports = Comment
