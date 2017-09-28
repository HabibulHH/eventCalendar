const express = require('express');
const app=express();
const port=5000;
app.use(express.static('public'));
app.use(express.static('src/views'));
const bodyParser=require('body-parser');
const {mongoose}=require('./server/DAL/mongoose');
var ObjectID = require('mongodb').ObjectID;
var {Event}=require('./server/MODEL/event');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const ObjectId = mongoose.mongo.ObjectId;



app.listen(port,function(err){

    console.log('Running the server on port '+port);
});

app.get('/home/getevents',function(req,res){
    Event.find().then((events)=>
    {
        res.send({events});
        res.end();
    },
    (err)=>{
        res.status(400).send(e)
    })
});

app.post('/home/SaveEvent',function(req,res){

    var event= new Event({
        _id:req.body.EventID,
        Title:req.body.Title,
        StartAt:req.body.StartAt,
        EndAt:req.body.EndAt,
        IsFullDay:req.body.IsFullDay,
        Description:req.body.Description
    });

      
    //console.log(typeof(req.body.e)===number)
        var id=new ObjectID(event._id);
    
    
        Event.findById(id,function (err, tank) 
        {

        
            if(tank!=null)
                {
                            tank.Description=event.Description;
                            tank.IsFullDay=event.IsFullDay;
                            tank.Title=event.Title;
                            tank.StartAt=event.StartAt;
                            tank.EndAt=event.EndAt;

                            tank.save(function (err, updatedTank) {
                                if (err) console.log("Can not update data");
                                res.json(updatedTank);
                                });
                }
            
                else{
                        
                        var SaveEvent= new Event({
                            Title:req.body.Title,
                            StartAt:req.body.StartAt,
                            EndAt:req.body.EndAt,
                            IsFullDay:req.body.IsFullDay,
                            Description:req.body.Description
                        });

                            SaveEvent.save().then((doc)=>{
                            res.json(doc); 
                            },(e)=>{
                            res.status(400).send(e)
                            console.log('can not save');
                            })
                }
         });

});