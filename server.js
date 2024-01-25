var express = require('express');
var app = express();
var fs = require("fs");


var PORT = process.env.port || 3000  
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.get("/api/:date",function(req,res){
    let dateParam = req.params.date; 
    let dateObject = new Date(dateParam); 
  

    if (!isNaN(dateParam)){
        dateObject= new Date(parseInt(dateParam))
    }
    else if (isNaN(dateObject.getTime())) {
      return res.json({ error : "Invalid Date" }); 
    }
  
    let unixTimeStamp = dateObject.getTime(); 
    let utcString = dateObject.toUTCString(); 
  
    res.json({ unix: unixTimeStamp, utc: utcString });

});



app.get("/api",function(req,res){
    let Rec_Date = new Date();
    let unix =Rec_Date.getTime()
    let utc = Rec_Date.toUTCString() 
    let result = {unix:unix,utc:utc}
    res.json(result)
});


var server = app.listen(PORT, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })