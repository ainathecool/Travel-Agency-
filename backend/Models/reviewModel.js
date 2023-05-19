const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reviewType: {
    type: String,
    enum: ['Accommodation', 'Transportation', 'Activity', 'Location'],
    required: true
  },
  reviewId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'reviewType'
  },
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},
{ timestamps: true}
);

module.exports = mongoose.model('Review', reviewSchema);
