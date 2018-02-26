var express = require('express')
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

server.listen(3000, function(){
    console.log('listening to localhost 3000..')
})

mongoose.connect('mongodb://localhost/mashubapp')
var db = mongoose.connection;
var users = db.collection('users')

//connect static folders
app.use(express.static(path.join(__dirname, "public")));

//set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send('hello world!')
})