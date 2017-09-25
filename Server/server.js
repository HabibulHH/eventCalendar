var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/event_calendar',{ useMongoClient: true});
 
var event= mongoose.model('event',{

 EventID:{type:String},
  StartAt:{
   type:String
   },
  EndAt:{
      type:String
  },
  IsFullDay:{
      type:Boolean
    },
  Title:{
      type:String
    },
  Description:{
      type:String
    }

});

var newEvent= new event({
    Title:"Taking bath"
});

newEvent.save().then((doc)=>{

},(e)=>{
    console.log('unable to save at event collection');
})
