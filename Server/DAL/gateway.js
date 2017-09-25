var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/event_calendar',{ useMongoClient: true});


module.exports={mongoose}