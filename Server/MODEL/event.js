 var mongoose=require('mongoose');
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
module.exports={event};