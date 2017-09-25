const {MongoClient,ObjectId}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/eventCalendarApp',(err,db)=>{

if(err)
    {
        console.log('can not connect..@');
    }
    else console.log('Connected here');
    db.collection('calendar_events').insertOne({
     text:'Something to do ',
     completed:false
    },(err,result)=>{

     if(err)
        {
            return console.log('unable to insert data');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.close();
});