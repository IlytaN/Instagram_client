var express = require('express');
var app = express();

// You can store key-value pairs in express, here we store the port setting
var express = require('express'),
app = express();
app.use(express.static('www'));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
