var express = require('express');
var bodyParser=require('body-parser');
var {mongoose}=require('./DAL/mongoose');
var {Event}=require('./MODEL/event');
var {eventManager}= require('./MODEL/eventManager');

var app= express();
app.use(bodyParser.json());
app.post('/event',(req,res)=>{
 
    console.log(req.body);
    var event= new Event({Title:req.body.Title});
    event.save().then((doc)=>{
        res.send(doc);
    },(e)=>{console.log('can not save')})
});
app.listen(3000,()=>{
   console.log('Connected');
});