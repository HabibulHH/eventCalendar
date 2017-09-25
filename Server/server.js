var express = require('express');
var bodyParser=require('body-parser');
var mongoose=require('./DAL/gateway');
var {event}=require('./MODEL/event');
var {eventManager}= require('./MODEL/eventManager');

var app= express();
app.post('/event',(req,res)=>{

});
app.listen(3000,()=>{
   console.log('Connected');
});