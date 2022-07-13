var mongoose = require('mongoose');
var Schema = new mongoose.Schema;



var Artical = new Schema({
    titel:String,
    description:String,
    tag:[String],
    date: new date()
});

module.exports = mongoose.model('Articals',Artical)