// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var expressJWT = require('express-jwt')
var jwt = require('jsonwebtoken');
// Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/assignment');

// Create Express application
var app = module.exports = express();

var NODE_ENV = 'development';
//Set Variables
app.set('env', process.env.NODE_ENV || 'production');
app.use(expressJWT({secret: 'yashwanth'}).unless({path: ['/api/v1/users/check', '/*.png']}))
app.use(bodyParser.urlencoded({ extended: true, limit:'50mb' }));
// app.use(express.bodyParser({uploadDir:'/home/user/Pictures'}));
app.use(bodyParser.json({limit:'50mb'}));
app.use(express.static( 'public' ))
console.log(__dirname, '/public')
routes = require('./routes/index')
app.use('/api', routes);

// Use environment defined port or 3000
var port = process.env.PORT || 2000;

// Start the server
app.listen(port);
console.log('Insert getat on port ' + port);
// http.listen(port,"0.0.0.0", function(){
//   console.log('listening on *:' + port);
// });
