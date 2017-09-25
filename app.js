var express = require('express');
var app=express();
const port=5000;
app.use(express.static('public'));
app.use(express.static('src/views'));
var bodyParser=require('body-parser');
var {mongoose}=require('./server/DAL/mongoose');
var {Event}=require('./server/MODEL/event');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/event',(req,res)=>{
 
    console.log(req.body);
    
});

//

app.listen(port,function(err){

    console.log('Running the server on port '+port);
});

app.get('/home/getevents',function(req,res){

});

app.post('/home/SaveEvent',function(req,res){

    var event= new Event({
        Title:req.body.Title,
        StartAt:req.body.StartAt,
        EndAt:req.body.EndAt,
        IsFullDay:req.body.IsFullDay,
        Description:req.body.Description
    });

    event.save().then((doc)=>{
        //res.status(200).send(doc)
          res.json(doc)
;    },(e)=>{
        res.status(400).send(e)
        console.log('can not save')})

});