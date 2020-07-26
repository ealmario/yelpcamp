const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
  name: {
    type: String,
    required : [true, 'Name cannot be empty']
  },
  image : {
    type: String
  }
})

const Category = mongoose.model('category', CampgroundSchema);
module.exports = Campground;