var express=require('express');
var app=express();
var path=require("path");
var fs=require("fs");

app.use(express.static(path.join(__dirname,'public')));

app.get('/' ,function(req,resp)
{
    resp.sendFile(path.join(__dirname,+'/index.html'));
});

app.get('/hello',function(req,resp)
{
    console.log("Calling rest API");
    var person={FirstName:'Swapnil',LastName:'Vaidya',age:'25'};
    resp.send(person);
});

app.listen(8000);

console.log("App listening at prt 8000");

