var express = require('express');

var app=express();
const port=5000;
app.use(express.static('public'));
app.use(express.static('src/views'));
app.listen(port,function(err){

    console.log('Running the server on port '+port);
});

app.get('/',function(req,res){

    res.send(' iam here');
});