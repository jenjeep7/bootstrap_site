var express= require('express');
var bodyParser = require('body-parser');

var app = express();
var port= process.env.PORT || 3000;

var index = require('./routes/index');
//////config/////////
app.use(express.static('views/public'));

app.use(bodyParser.json());

//////Routes////////
app.use('/', index);


var server = app.listen(3000, function(){
 var port = server.address().port;
console.log('Listening on port', port);
});
