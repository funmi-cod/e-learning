var express = require('express');
var http = require('http');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true} ));

app.set('view engine', 'ejs');

var dateFormat = require('dateFormat');
var now = new Date();


var connection = mysql.createConnection({
    //properties...
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'courseDB' 
});

connection.connect(function(err){
    if(err){
        console.log('404, oops!. you have done something wrong');
    } else{
        console.log('connected to courseDB');
    }
}); 



app.listen(3000);