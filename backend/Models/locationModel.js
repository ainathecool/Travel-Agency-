const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
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
  address: {
    type: String,
    
  },
  latitude: {
    type: Number,
    
  },
  longitude: {
    type: Number,
    
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
    }]
},

{ timestamps: true}
);

module.exports = mongoose.model('Location', locationSchema);
