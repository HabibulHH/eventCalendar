var mongoose=require('mongoose');
var eventManager= new event({
    Title:"Taking bath"
});

eventManager.save().then((doc)=>{
console.log,('saved',doc)
},(e)=>{
    console.log('unable to save at event collection');
})

module.exports={eventManager}