var express = require('express');
var app=express();
const port=5000;
app.use(express.static('public'));
app.use(express.static('src/views'));
var bodyParser=require('body-parser');
var {mongoose}=require('./server/DAL/mongoose');
 var ObjectID = require('mongodb').ObjectID;
var {Event}=require('./server/MODEL/event');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const ObjectId = mongoose.mongo.ObjectId;
app.post('/event',(req,res)=>{
 
    console.log(req.body);
    
});

//

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
if(req.body.EventID!==null||req.body.EventID!==undefined)
    {
      
    console.log(JSON.stringify(event));
    console.log(event.id);
    var id=new ObjectID(event._id);
    
    //console.log(id+"   "+mongoose.Types.ObjectId(id.toHexString()));
        Event.findById(id,function (err, tank) {
        
            console.log(JSON.stringify(tank));
        // console.log(JSON.stringify(tank));
        tank.Description=event.Description;
        tank.IsFullDay=event.IsFullDay;
        tank.Title=event.Title;
        tank.StartAt=event.StartAt;
        tank.EndAt=event.EndAt;

        tank.save(function (err, updatedTank) {
            if (err) return handleError(err);
            res.send(updatedTank);
            });
         });

    
    }
        else{
           event.save().then((doc)=>{
        //res.status(200).send(doc)
        console.log('Data added');
          res.json(doc);
          //res.end();

          
    },(e)=>{
        res.status(400).send(e)
        console.log('can not save')
    })

        }
   
});