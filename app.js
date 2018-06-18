
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path=require('path');
var mysql=require('mysql');
var fs=require('fs');


//creating database and connecting it
var con= mysql.createConnection({
    host:"localhost",
    password:"",
    user:"root",
    database:"nodedb"
});
con.connect(function(err){
if(err) {
    console.log("error!");
}
else
console.log("connected");
});
//


//connecting html
console.log("connected 1");
app.use(express.static(path.join(__dirname + '/public')));
//
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));

app.post('/details',function(req,res){
    console.log("inside");
var newuser={
    Name:req.body.username,
    Email:req.body.emailaddr,
    Comment:req.body.coment
}
console.log("before ");
con.query('INSERT INTO sampletable SET?', newuser,function(err,resp){
    if(err)
    console.log("error in inserting values");
    else
    console.log("values inserted");
});
});



/*
app.use(bodyParser.json());
var urlbodyparser=bodyParser.urlencoded({extended:false });
app.get('/',function(req,urlbodyparser,res){
con.query("SELECT * FROM sampletable",function(error,rows,fields){
if(error){
    console.log("errorquery");
}else
console.log(req.body);
});
});
*/

app.listen(3000);
