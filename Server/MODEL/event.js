var mongoose=require('mongoose');
var Event= mongoose.model('Event',{

 EventID:{type:String},
  StartAt:{
   type:Date
   },
  EndAt:{
      type:Date
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