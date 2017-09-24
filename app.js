var express = require('express');

var app=express();
const port=5000;
app.listen(port,function(err){

    console.log('Running the server on port '+port);
});

app.get('/',function(req,res){

    res.send(' iam here');
});