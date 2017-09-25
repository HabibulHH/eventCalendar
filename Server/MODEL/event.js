var mongoose=require('mongoose');
var Event= mongoose.model('Event',{

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
module.exports={Event};