var router = require('express').Router();
var path = require('path');

//get gif router//

var gifs = require('./gif');

router.use('/gif', gifs);



router.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '../views/public/index.html'));
});




module.exports = router;
