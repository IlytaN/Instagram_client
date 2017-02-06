var express = require('express');
var app = express();

// You can store key-value pairs in express, here we store the port setting
app.set('port', (process.env.PORT || 3000));

  //??? not sure
app.use(express.static('www'));
app.get('/', function (req, res) {
  res.sendfile('www/index.html');
})
// start listening for incoming HTTP connections
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
