const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const authorSchema = new Schema({
    name:String,
    age:Number
})

module.exports = mongoose.model('Author',authorSchema);