const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bookingType: {
    type: String,
    enum: ['Accommodation', 'Transportation', 'Activity'],
    required: true
  },
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'bookingType'
  },
  bookingDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled'],
    required: true
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },
},
{ timestamps: true}
);
 
module.exports = mongoose.model('Booking', bookingSchema);