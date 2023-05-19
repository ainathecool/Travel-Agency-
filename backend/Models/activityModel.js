const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
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
price: {
    type: Number,
    min: 0
},
location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',

},
rating: {
    type: Number,
    min: 0,
    max: 5
},
reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
    }]
},
{ timestamps: true}
);
 
module.exports = mongoose.model('Activity', activitySchema);