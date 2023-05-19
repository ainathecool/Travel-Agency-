const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  accommodations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Accommodation'
  }],
  transportations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transportation'
  }],
  activities: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activity'
  }],
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled'],
    required: true
  }
},
{ timestamps: true}
);
 
module.exports = mongoose.model('Plan', planSchema);