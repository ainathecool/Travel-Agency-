const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accommodationSchema = new Schema({
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
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
  
  },
  price: {
    type: Number,
 
  },
  amenities: [{   //amenities: ['Wi-Fi', 'Air Conditioning', 'Swimming Pool', 'Gym']
    type: String
  }],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
    }]
},

{ timestamps: true}
);

module.exports = mongoose.model('Accommodation', accommodationSchema);
