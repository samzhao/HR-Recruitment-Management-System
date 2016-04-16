var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var fallback = require('express-history-api-fallback')
var app = express();

app.set('port', (process.env.PORT || 3000));

var root = process.cwd() + '/dist'

app.use('/', express.static(root));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('*', function(req, res) {
  res.sendFile(path.join(root, 'index.html'))
})

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
