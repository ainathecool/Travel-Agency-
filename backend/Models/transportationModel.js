const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transportationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    
  },
  type: {
    type: String,
    enum: ['Flight', 'Train', 'Bus'],
    
  },
  fromLocation: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
    
  },
  toLocation: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
    
  },
  departureTime: {
    type: Date,
    
  },
  arrivalTime: {
    type: Date,
    
  },
  price: {
    type: Number,
    
  },
  
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
    }]
},

{ timestamps: true}
);

module.exports = mongoose.model('Transportation', transportationSchema);
